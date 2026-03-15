/*
  # Create pastes table for BinUniverse

  1. New Tables
    - `pastes`
      - `id` (uuid, primary key) - Auto-generated unique identifier
      - `slug` (text, unique) - Short URL-friendly identifier (8 characters)
      - `content` (text) - The paste content
      - `language` (text) - Programming language for syntax highlighting
      - `created_at` (timestamptz) - Timestamp when paste was created

  2. Security
    - Enable RLS on `pastes` table
    - Add policy for anyone to read pastes (public access)
    - Add policy for anyone to create pastes (public access)
    
  3. Notes
    - This is a public pastebin, so all pastes are readable by everyone
    - No authentication required to create or view pastes
    - Slugs are unique to prevent collisions
*/

CREATE TABLE IF NOT EXISTS pastes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  language text DEFAULT 'text' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE pastes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read pastes"
  ON pastes
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create pastes"
  ON pastes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS pastes_slug_idx ON pastes(slug);
CREATE INDEX IF NOT EXISTS pastes_created_at_idx ON pastes(created_at DESC);
