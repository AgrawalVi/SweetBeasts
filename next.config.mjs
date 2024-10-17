/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/pogo',
      destination: '/sweet-haven/pogo',
      permanent: false,
    },
    {
      source: '/lore/pogo',
      destination: '/sweet-haven/pogo',
      permanent: true,
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
    {
      source: '/new-arrivals',
      destination: '/products/pogo',
      permanent: false,
    },
    {
      source: '/find-sweetbeasts',
      destination: '/products/pogo',
      permanent: false,
    },
    {
      source: '/contributions',
      destination: '/about-us',
      permanent: false,
    },
  ],
}

export default nextConfig
