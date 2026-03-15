import React from 'react'
import { notFound } from 'next/navigation'
import { supabase, type Paste } from '@/lib/supabase'
import PasteViewer from '@/components/PasteViewer'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

async function getPaste(slug: string): Promise<Paste | null> {
  try {
    const { data, error } = await supabase
      .from('pastes')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()

    if (error) {
      console.error('Error fetching paste:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Unexpected error in getPaste:', error)
    return null
  }
}

export default async function PastePage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  const paste = await getPaste(slug)

  if (!paste) {
    notFound()
  }

  const highlightedCode = paste.content

  return <PasteViewer slug={slug} highlightedCode={highlightedCode} />
}
