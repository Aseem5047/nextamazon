/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["pngimg.com", "lh3.googleusercontent.com", "m.media-amazon.com", "images-eu.ssl-images-amazon.com"]
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYXNlZW1ndXB0YSIsImEiOiJjbDlxdXIzeXoxNW1zM3BzNWliMndvaDl4In0.FOqN8YP7iiM2e_wXdZFRfg',
  }
}
