/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["pngimg.com", "lh3.googleusercontent.com", "m.media-amazon.com", "images-eu.ssl-images-amazon.com", "images-na.ssl-images-amazon.com", "https://pngimg.com/uploads/amazon/amazon_PNG11.png", "https://images-eu.ssl-images-amazon.com/images/G/31/img18/prrrefresh/June/2022/PMP_Page_1500x300_px.jpg"]
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYXNlZW1ndXB0YSIsImEiOiJjbDlxdXIzeXoxNW1zM3BzNWliMndvaDl4In0.FOqN8YP7iiM2e_wXdZFRfg',
  }
}
