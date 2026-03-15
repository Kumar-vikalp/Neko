import React from 'react'
import { notFound } from 'next/navigation'
import { supabase, type Paste } from '@/lib/supabase'
import PasteViewer from '@/components/PasteViewer'

interface PageProps {
  params: {
    slug: string
  }
}

async function getPaste(slug: string): Promise<Paste | null> {
  try {
    console.log('Fetching paste with slug:', slug)
    
    const { data, error } = await supabase
      .from('pastes')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return null
    }

    console.log('Found paste:', data)
    return data
  } catch (error) {
    console.error('Error fetching paste:', error)
    return null
  }
}

export default async function PastePage({ params }: PageProps) {
  const paste = await getPaste(params.slug)

  if (!paste) {
    notFound()
  }

  // Temporarily bypass Shiki for debugging
  const highlightedCode = paste.content

  return <PasteViewer slug={params.slug} highlightedCode={highlightedCode} />
}
