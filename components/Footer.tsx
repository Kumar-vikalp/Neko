import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css' // Import the styles

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center">
        <span>Neko</span>
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
      
      <div id="copyright" className="ml-auto text-sm opacity-75">
        Copyright <i className="far fa-copyright"></i> 2026 -
        <a href="https://github.com/kumar-vikalp" rel="noopener" target="_blank" className="hover:opacity-100 transition-opacity">
          kumar-vikalp
        </a>
      </div>
    </footer>
  )
}
