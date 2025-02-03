import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
});


export const metadata = {
  title: "YouTube Thumbnail Downloader",
  description:
    "Download high-definition YouTube thumbnails instantly with our free HD YouTube Thumbnail Downloader. Perfect for content creators, digital marketers, and SEO enthusiasts. Boost your content's visual appeal with top-quality thumbnails in seconds.",
  keywords: [
    "HD YouTube Thumbnail Downloader",
    "HD thumbnails",
    "YouTube thumbnails",
    "download YouTube thumbnails",
    "free thumbnail downloader",
    "content creator tools",
    "SEO tools",
    "high quality thumbnails",
    "YouTube thumbnail grabber",
    "online thumbnail downloader",
    "video thumbnail downloader"
  ],
  icons: {
    icon: "/favicon.ico" // Ensure this file exists in your public folder
  },
  openGraph: {
    title: "HD YouTube Thumbnail Downloader - Free HD Quality Thumbnails",
    description:
      "Download high-definition YouTube thumbnails instantly with our free HD YouTube Thumbnail Downloader. Ideal for content creators, digital marketers, and SEO enthusiasts.",
    url: "https://www.okhatrimaza.shop/",
    siteName: "Okhatrimaza",
    images: [
      {
        url: "https://www.okhatrimaza.shop/thumbnail.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "HD YouTube Thumbnail Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your actual Twitter handle
    creator: "@yourtwitterhandle", // Replace with your actual Twitter handle
    title: "HD YouTube Thumbnail Downloader - Free HD Quality Thumbnails",
    description:
      "Download high-definition YouTube thumbnails instantly with our free HD YouTube Thumbnail Downloader. Perfect for content creators and digital marketers.",
    images: ["https://www.okhatrimaza.shop/thumbnail.png"], // Replace with your actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags can be placed here if needed */}
      </head>
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
