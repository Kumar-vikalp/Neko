import React from 'react'
import { notFound } from 'next/navigation'
import { supabase, type Paste } from '@/lib/supabase'
import { codeToHtml } from 'shiki'
import PasteViewer from '@/components/PasteViewer'

interface PageProps {
  params: {
    slug: string
  }
}

async function getPaste(slug: string): Promise<Paste | null> {
  try {
    const { data, error } = await supabase
      .from('pastes')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()

    if (error || !data) {
      return null
    }

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

  const highlightedCode = await codeToHtml(paste.content, {
    lang: paste.language === 'text' ? 'txt' : paste.language,
    theme: 'github-dark',
  })

  return <PasteViewer slug={params.slug} highlightedCode={highlightedCode} />
}