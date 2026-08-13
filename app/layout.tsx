import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JOYINFLATE - Balloons Delivered Straight to Your Door",
  description:
    "Premium balloons for every celebration. Balloons delivered straight to your door. Joyinflate is the best place to buy balloons online. We offer a wide range of balloons for every occasion, balloon accessories, decorations, and favors.",
  icons: {
    icon: [{ url: "/images/logo.png", sizes: "any" }],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <Header />
        <main className="pt-[140px] lg:pt-[180px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
