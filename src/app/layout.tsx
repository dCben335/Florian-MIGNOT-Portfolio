import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/features/Layouts/Header/Header";
import Footer from "@/components/features/Layouts/Footer/Footer";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Toaster closeButton duration={3000} richColors/>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
