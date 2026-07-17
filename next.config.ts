import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tfoejgysmcfdwdlehymv.supabase.co",
      },
    ],
  },
};

export default nextConfig;
