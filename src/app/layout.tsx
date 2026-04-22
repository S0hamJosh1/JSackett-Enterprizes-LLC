import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const soria = localFont({
  src: "../fonts/Soria.ttf",
  variable: "--font-soria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JSackett Enterprizes LLC | Counseling & Practical Support",
  description:
    "JoAnn Sackett, LCSW, offers counseling and practical support in New Jersey. Call for a free initial consultation; individual sessions are $165.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${soria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
