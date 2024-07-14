/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/pogo',
      destination: '/lore/pogo',
      permanent: true,
    },
    {
      source: '/all-products',
      destination: '/products/pogo',
      permanent: true,
    },
    {
      source: '/products',
      destination: '/products/pogo',
      permanent: true,
    },
  ],
}

export default nextConfig
