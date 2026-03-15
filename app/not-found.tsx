import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-gray-300 mb-6">Paste not found</h2>
        <p className="text-gray-400 mb-8">
          The paste you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Create New Paste
        </Link>
      </div>
    </main>
  )
}