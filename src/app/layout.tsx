import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import BackgroundContainer from "./components/background-container";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carp travel",
  description:
    "The website is dedicated to organizing tours and trips to the Carpathians, offering a wide range of services for lovers of active recreation and nature. Here you will find information about various routes, tour packages, and unique offers that will allow you to enjoy the natural beauty of the Carpathian Mountains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <BackgroundContainer>
          <Header />
          <main className="">{children}</main>
        </BackgroundContainer>

        <Footer />
      </body>
    </html>
  );
}
