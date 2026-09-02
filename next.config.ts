import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external product imagery from Unsplash.
  // Add more hosts here as the catalogue grows.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Ensure the server is reachable from Dokploy / Traefik in the VPS deploy.
  // The actual flag is applied at runtime via `next start -H 0.0.0.0` in
  // the npm `start` script.
  output: "standalone",
  experimental: {
    // Keep server actions enabled (default in Next 16 but explicit is good).
    serverActions: { bodySizeLimit: "2mb" },
  },
};

export default nextConfig;
