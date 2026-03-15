'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { nanoid } from 'nanoid'
import { supabase } from '@/lib/supabase'
import Header from './Header'
import Footer from './Footer'
import Toast from './Toast'

export default function PasteForm() {
  const router = useRouter()
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleSave = useCallback(async () => {
    if (!content.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      const slug = nanoid(8)

      const { error } = await supabase
        .from('pastes')
        .insert({
          slug,
          content: content.trim(),
          language: 'text',
          title: null,
        })

      if (error) {
        console.error('Error creating paste:', error)
        setToastMessage('Failed to save paste')
        setShowToast(true)
        setIsSubmitting(false)
        return
      }

      const url = `${window.location.origin}/paste/${slug}`
      await navigator.clipboard.writeText(url)

      setToastMessage('Paste saved! URL copied to clipboard')
      setShowToast(true)

      setTimeout(() => {
        router.push(`/paste/${slug}`)
      }, 1500)
    } catch (error) {
      console.error('Error:', error)
      setToastMessage('Failed to save paste')
      setShowToast(true)
      setIsSubmitting(false)
    }
  }, [content, isSubmitting, router])

  const handleNew = useCallback(() => {
    setContent('')
  }, [])

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        handleSave()
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault()
        handleNew()
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [handleSave, handleNew])

  return (
    <div className="binuniverse-layout">
      <Header onSave={handleSave} onNew={handleNew} />

      <div id="content" className="binuniverse-editor">
        <textarea
          className="binuniverse-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paste code, save and share the link!"
          spellCheck={false}
        />
      </div>

      <Footer />

      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}
