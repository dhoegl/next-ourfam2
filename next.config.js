/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/images/:path*', // Replace with your image route
            headers: [
              {
                key: 'Content-Type',
                value: 'image/jpeg',
              },
            ],
          },
        ];
    },
}

module.exports = nextConfig
