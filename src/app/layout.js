import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TripZen - Travel Booking",
  description: "Book your dream destination with TripZen",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // 27. Inject the custom Google fonts as CSS variables to be utilized throughout the Tailwind configuration
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 28. Use min-h-full and flex column to ensure the footer always sticks to the bottom even on short pages */}
      <body className="min-h-full flex flex-col">
        <Navbar />
        {/* 29. Render the main page content dynamically based on the current route */}
        <main className="flex-1">{children}</main>
        <Footer />
        {/* 30. Mount the global Toaster component to render react-hot-toast notifications anywhere in the app */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
