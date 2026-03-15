/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: 'standalone',
    serverComponentsExternalPackages: ['shiki']
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }
};

module.exports = nextConfig;
