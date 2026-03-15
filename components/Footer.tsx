import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center">
        <span>binuniverse</span>
      </div>
      
      <div className="links">
        <Link href="/about" className="link">
          about
        </Link>
        <Link href="/docs" className="link">
          docs
        </Link>
        <Link href="/api-docs" className="link">
          api
        </Link>
      </div>
    </footer>
  )
}