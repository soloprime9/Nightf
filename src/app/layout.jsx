import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "YouTube Thumbnail Downloader",
  description:
    "This application lets you download thumbnails of all quality. Just paste the URL of the YouTube video below and click Get Thumbnail Image.",
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
    "video thumbnail downloader",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HD YouTube Thumbnail Downloader - Free HD Quality Thumbnails",
    description:
      "Download high-definition YouTube thumbnails instantly with our free HD YouTube Thumbnail Downloader. Ideal for content creators, digital marketers, and SEO enthusiasts.",
    url: "https://www.okhatrimaza.shop/",
    siteName: "Okhatrimaza",
    images: [
      {
        url: "https://www.okhatrimaza.shop/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "YouTube Thumbnail Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your actual Twitter handle
    creator: "@yourtwitterhandle",
    title: "HD YouTube Thumbnail Downloader - Free HD Quality Thumbnails",
    description:
      "Download high-definition YouTube thumbnails instantly with our free HD YouTube Thumbnail Downloader. Perfect for content creators and digital marketers.",
    images: ["/android-chrome-192x192.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
