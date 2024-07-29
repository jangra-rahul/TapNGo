/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/Dashboard/HomeDashboard",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
