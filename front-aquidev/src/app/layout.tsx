import { UserProvider } from "@/context/userContex";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { EdgeStoreProvider } from "../../lib/edgestore";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Beer Punk",
  description:
    "Let's cool off and relax your mind a little, menu of artisanal drinks and fast delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={roboto.className}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </body>
      </UserProvider>
    </html>
  );
}
