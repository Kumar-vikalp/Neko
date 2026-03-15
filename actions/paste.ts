'use server'

import { nanoid } from 'nanoid'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export async function createPaste(formData: FormData) {
  const content = formData.get('content') as string
  const title = formData.get('title') as string
  const language = formData.get('language') as string || 'text'

  if (!content || content.trim().length === 0) {
    throw new Error('Content cannot be empty')
  }

  const slug = nanoid(8)

  try {
    const { error } = await supabase
      .from('pastes')
      .insert({
        slug,
        content: content.trim(),
        language,
        title: title.trim() || null,
      })

    if (error) {
      console.error('Error creating paste:', error)
      throw new Error('Failed to create paste')
    }

    redirect(`/paste/${slug}`)
  } catch (error) {
    console.error('Error creating paste:', error)
    throw new Error('Failed to create paste')
  }
}