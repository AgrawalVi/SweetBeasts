/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/pogo',
      destination: '/lore/pogo',
      permanent: true,
    },
  ],
}

export default nextConfig
