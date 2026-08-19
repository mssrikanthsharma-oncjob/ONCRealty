/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted anywhere (including the
  // current onctrust.in hosting) with no Node server required.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
