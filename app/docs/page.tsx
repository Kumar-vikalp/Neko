import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DocsPage() {
  return (
    <div className="Neko-layout">
      <Header />
      
      <div id="content" className="Neko-editor">
        <div className="markdown p-8">
          <h1 className="text-3xl font-bold mb-6">Documentation</h1>
          
          <div className="space-y-6 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p>
                Neko provides a simple web interface for creating and sharing code snippets.
                Visit the homepage, paste your content, and it will be automatically saved with a unique URL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Keyboard Shortcuts</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><code>Ctrl+S</code> - Save the current paste</li>
                <li><code>Ctrl+N</code> - Create a new paste</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Supported Languages</h2>
              <p>Neko supports syntax highlighting for many programming languages including:</p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <ul className="list-disc list-inside space-y-1">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>C</li>
                  <li>C#</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>PHP</li>
                  <li>Ruby</li>
                  <li>Go</li>
                  <li>Rust</li>
                  <li>JSON</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>XML</li>
                  <li>SQL</li>
                  <li>Bash</li>
                  <li>YAML</li>
                  <li>Markdown</li>
                  <li>Plain Text</li>
                  <li>And more...</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">URL Structure</h2>
              <div className="space-y-2">
                <p><strong>Paste URLs:</strong></p>
                <code className="block bg-gray-800 p-2 rounded">https://Neko.hornymama.workers.dev/[paste-id]</code>
                
                <p className="mt-4"><strong>Raw Content:</strong></p>
                <code className="block bg-gray-800 p-2 rounded">https://Neko.hornymama.workers.dev/api/pastes/[paste-id]/raw</code>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Themes</h2>
              <p>
                Neko supports both dark and light themes. Click the theme toggle button in the header 
                to switch between themes. Your preference will be saved in your browser.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
