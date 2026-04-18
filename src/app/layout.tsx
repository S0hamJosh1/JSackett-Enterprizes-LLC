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
  title: "JSackett Enterprizes LLC | Patient Advocacy & Support",
  description:
    "JoAnn Sackett, LCSW, is licensed in New Jersey and offers counseling support, patient advocacy, and practical guidance for individuals and families navigating complex life situations.",
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
