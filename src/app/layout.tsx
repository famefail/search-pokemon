import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./Provider/apollo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEARCH POKEMON",
  description: "Search pokemon using NextJs and GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-50">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
