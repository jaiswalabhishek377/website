import type { Metadata } from "next";
import { Inter, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abhishek Jaiswal | Portfolio",
  description:
    "Full Stack & AI Engineer — open-source contributor, building real-time systems and AI pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${splineSansMono.variable} relative antialiased`}
      >
        <div
          aria-hidden="true"
          className="grain-bg pointer-events-none fixed inset-0 -z-10"
        >
          <div className="grain-bg__gradient" />
          <div className="grain-bg__orb grain-bg__orb--1" />
          <div className="grain-bg__orb grain-bg__orb--2" />
          <div className="grain-bg__noise" />
        </div>
        {children}
      </body>
    </html>
  );
}
