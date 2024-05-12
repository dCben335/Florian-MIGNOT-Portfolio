import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/features/Layouts/Header/Header";
import Footer from "@/components/features/Layouts/Footer/Footer";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Toaster closeButton duration={3000} richColors/>
        <Header />
          {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="GTM-M9JNK4MX" />
    </html>
  );
}
