import { PostHogProvider } from "./_analytics/provider";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Trimtube",
  description: "Trimtube",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        <html lang="en" className={`${GeistSans.variable} dark`}>
          <body>
            {children}
            {modal}
            <div id="modal-root" />
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  );
}
