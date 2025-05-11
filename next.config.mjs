// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Add this for static exports

  // If your GitHub Pages site is at https://<username>.github.io/<repository-name>/
  basePath: '/aerospace-ontology-hub', // <--- Uncomment and set to your repository name
  assetPrefix: '/aerospace-ontology-hub/', // <--- Also uncomment if using basePath

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // This is already correctly set, which is great!
  },
};

export default nextConfig;