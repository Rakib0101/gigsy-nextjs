import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JIGSY - Balloon Shopping Made Easy",
  description:
    "Premium balloons for every celebration. Balloons delivered straight to your door.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair_display.className}>
        <Header />
        <main className="pt-[140px] lg:pt-[180px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
