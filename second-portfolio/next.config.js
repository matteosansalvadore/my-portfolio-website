/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Resolve the package path for the globals.css file
    config.resolve.alias["/styles/globals.css"] =
      __dirname + "/styles/globals.css";

    return config;
  },
};
