/*
  # Add title field to pastes table

  1. Changes
    - Add optional `title` column to `pastes` table
    - Title can be null (optional field)
    - Add index for better performance when searching by title

  2. Notes
    - This allows users to optionally give their pastes a title
    - Maintains backward compatibility with existing pastes
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'pastes' AND column_name = 'title'
  ) THEN
    ALTER TABLE pastes ADD COLUMN title text;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS pastes_title_idx ON pastes(title) WHERE title IS NOT NULL;