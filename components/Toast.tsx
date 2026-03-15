'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  show: boolean
  onClose: () => void
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300"
      style={{
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      <div className="flex items-center gap-2">
        <i className="fas fa-check-circle text-green-400"></i>
        <span>{message}</span>
      </div>
    </div>
  )
}
