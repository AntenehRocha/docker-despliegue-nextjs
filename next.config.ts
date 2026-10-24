import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ['10.105.20.46', 'localhost:3000'],
};

export default nextConfig;