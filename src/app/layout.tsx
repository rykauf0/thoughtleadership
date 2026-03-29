import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Kaufman — AI Enablement Architect",
  description:
    "I design the organizational systems that make AI adoption stick. Managing Director of Digital & AI Enablement at CPP Investments.",
  openGraph: {
    title: "Ryan Kaufman — AI Enablement Architect",
    description:
      "I design the organizational systems that make AI adoption stick.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
