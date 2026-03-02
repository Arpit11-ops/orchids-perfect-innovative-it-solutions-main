import type { NextConfig } from "next";
import path from "node:path";

// Optional loader from orchids-visual-edits. Some environments can fail to resolve
// the package export path, so we guard it and keep Next.js bootable.
let loaderPath: string | null = null;
try {
  loaderPath = require.resolve("orchids-visual-edits/loader.js");
} catch {
  loaderPath = null;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: loaderPath
    ? {
        rules: {
          "*.{jsx,tsx}": {
            loaders: [loaderPath],
          },
        },
      }
    : undefined,
} as NextConfig;

export default nextConfig;
