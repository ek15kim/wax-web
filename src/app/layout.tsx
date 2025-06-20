import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./../../globals.css";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wax",
  description: "Explore unforgettable learning",
  icons: {
    icon: "/LogoSecondary.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    // <header className="sticky top-0 w-full py-1 md:px-4 px-2 shadow-lg z-50 bg-opacity-50  bg-white">
    <header className="sticky top-0 w-full py-1 md:px-4 px-2 shadow-lg z-50 bg-opacity-50 text-slate-200  bg-slate-900">
      <div className="flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-3xl md:text-4xl font-semibold p-3 md:p-4 md:px-5"
        >
          WAX
          {/* <Image
            src="/LogoSecondary.png"
            alt="logo"
            width="80"
            height="50"
            priority
          /> */}
        </Link>
        <nav className="md:px-10">
          <ul className="flex flex-wrap gap-5 md:text-xl text-lg font-mono">
            <li className="hover:underline underline-offset-8">
              <Link className="flex flex-wrap" href="/services">
                Services
                <ChevronDownIcon className="w-7 h-7" />
              </Link>
            </li>
            <li className="hover:underline underline-offset-8">
              <Link className="flex flex-wrap" href="/about">
                About
                <ChevronDownIcon className="w-7 h-7" />
              </Link>
            </li>
            <Link
              href="#enquiry"
              className="hidden md:block md:ml-10 border-1 font-semibold text-sm px-5 p-1 border-gray-500 rounded-3xl hover:text-gray-600 font-mono hover:bg-gray-50 bg-slate-800 text-white"
            >
              Contact us
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
  const footer = (
    <footer
      id="footer"
      role="contentinfo"
      className="dark:bg-gray-100 text-slate-300 py-10 font-normal text-center w-full bg-slate-900"
    >
      footer
    </footer>
  );
  return (
    <html lang="en">
      <body className="relative h-screen">
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
