/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable ESLint during build (we'll run it separately)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Exclude test files from being treated as pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map((ext) => {
    return ext;
  }),
  // Custom webpack config to exclude test files
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(spec|test)\.(ts|tsx|js|jsx)$/,
      loader: 'ignore-loader',
    });

    // Ignore __tests__ directories
    config.module.rules.push({
      test: /\/__tests__\//,
      loader: 'ignore-loader',
    });

    return config;
  },
  // Allow Sass/SCSS modules (enabled by default in Next.js)
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  // If you plan to deploy under a subpath, set basePath here.
  trailingSlash: true,
};

export default nextConfig;
