import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://lofrev.net/wp-content/photos/2016/08/**')],
  },
};

export default nextConfig;
