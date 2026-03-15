import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function APIDocsPage() {
  return (
    <div className="binuniverse-layout">
      <Header />

      <div id="content" className="binuniverse-editor">
        <div className="markdown p-8">
          <h1 className="text-3xl font-bold mb-6">API Documentation</h1>

          <div className="space-y-6 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p>
                binuniverse provides a RESTful API for programmatic access to create, read, update, and delete pastes.
                All endpoints return JSON responses.
              </p>
              <div className="bg-gray-800 rounded p-4 mt-4">
                <code className="text-green-400">Base URL: https://binuniverse.com/api</code>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">POST /api/pastes</h3>
                  <p className="mb-3">Create a new paste</p>
                  <div className="bg-gray-800 rounded p-4 mb-3">
                    <p className="text-green-400 text-sm mb-2">Request Body:</p>
                    <pre className="text-sm overflow-x-auto">{`{
  "content": "console.log('Hello World');",
  "language": "javascript",
  "title": "My First Paste"
}`}</pre>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">GET /api/pastes/[slug]</h3>
                  <p className="mb-3">Get a specific paste by slug</p>
                  <div className="bg-gray-800 rounded p-4">
                    <p className="text-green-400 text-sm mb-2">Example:</p>
                    <code className="text-sm">curl https://binuniverse.com/api/pastes/abc12345</code>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">PUT /api/pastes/[slug]</h3>
                  <p className="mb-3">Update an existing paste</p>
                  <div className="bg-gray-800 rounded p-4">
                    <p className="text-green-400 text-sm mb-2">Request Body:</p>
                    <pre className="text-sm overflow-x-auto">{`{
  "content": "Updated content",
  "language": "javascript",
  "title": "Updated Title"
}`}</pre>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">DELETE /api/pastes/[slug]</h3>
                  <p className="mb-3">Delete a paste</p>
                  <div className="bg-gray-800 rounded p-4">
                    <p className="text-green-400 text-sm mb-2">Example:</p>
                    <code className="text-sm">curl -X DELETE https://binuniverse.com/api/pastes/abc12345</code>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">GET /api/pastes/[slug]/raw</h3>
                  <p className="mb-3">Get raw paste content</p>
                  <div className="bg-gray-800 rounded p-4">
                    <p className="text-green-400 text-sm mb-2">Example:</p>
                    <code className="text-sm">curl https://binuniverse.com/api/pastes/abc12345/raw</code>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
              <div className="bg-gray-800 rounded p-4">
                <p className="text-green-400 text-sm mb-2">Paste Object:</p>
                <pre className="text-sm overflow-x-auto">{`{
  "id": "uuid",
  "slug": "abc12345",
  "content": "console.log('Hello World');",
  "language": "javascript",
  "title": "My Paste",
  "created_at": "2024-01-01T12:00:00Z"
}`}</pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Error Responses</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">400 Bad Request</h4>
                  <div className="bg-gray-800 rounded p-4">
                    <pre className="text-sm">{`{"error": "Content is required"}`}</pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">404 Not Found</h4>
                  <div className="bg-gray-800 rounded p-4">
                    <pre className="text-sm">{`{"error": "Paste not found"}`}</pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">500 Internal Server Error</h4>
                  <div className="bg-gray-800 rounded p-4">
                    <pre className="text-sm">{`{"error": "Internal server error"}`}</pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
