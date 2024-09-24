/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/pogo',
      destination: '/sweet-haven/pogo',
      permanent: false,
    },
    {
      source: '/all-products',
      destination: '/products/pogo',
      permanent: false,
    },
    {
      source: '/products',
      destination: '/products/pogo',
      permanent: false,
    },
  ],
}

export default nextConfig
