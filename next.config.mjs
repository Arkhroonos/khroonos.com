/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Allow Sass/SCSS modules (enabled by default in Next.js)
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  // If you plan to deploy under a subpath, set basePath here.
  trailingSlash: true,
};

export default nextConfig;
