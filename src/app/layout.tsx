import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./Header/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carp travel",
  description:
    "The website is dedicated to organizing tours and trips to the Carpathians, offering a wide range of services for lovers of active recreation and nature. Here you will find information about various routes, tour packages, and unique offers that will allow you to enjoy the natural beauty of the Carpathian Mountains.",
  openGraph: {
    title: "Carp travel",
    description:
      "The website is dedicated to organizing tours and trips to the Carpathians, offering a wide range of services for lovers of active recreation and nature. Here you will find information about various routes, tour packages, and unique offers that will allow you to enjoy the natural beauty of the Carpathian Mountains.",
    images: [
      {
        url: "https://carp-travel-kohl.vercel.app/img/OGImage.webp",
        alt: "first page",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
