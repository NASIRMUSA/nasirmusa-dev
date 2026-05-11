import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nasir Musa | Full-Stack Developer & Product Leader",
  description: "Nasir Musa is a Full-Stack Developer and Co-Founder of Digital Solution Academy. Specializing in high-performance web and mobile applications, scalable architecture, and strategic product building for international markets.",
  keywords: ["Nasir Musa", "Full-Stack Developer", "Software Engineer", "Next.js", "React Native", "Digital Solution Academy", "Remote Developer", "International Job Seeker"],
  authors: [{ name: "Nasir Musa" }],
  openGraph: {
    title: "Nasir Musa | Full-Stack Developer & Product Leader",
    description: "Building high-performance digital products for businesses globally. Open to international and remote opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasir Musa | Full-Stack Developer & Product Leader",
    description: "Building high-performance digital products for businesses globally. Open to international and remote opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-background text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
