import { PostHogProvider } from "./_analytics/provider";
import "~/styles/globals.css";

import { fontInter, fontMono } from "~/lib/fonts";
import { type Metadata } from "next";
import { siteConfig } from "~/config/site";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        <html
          lang="en"
          className={cn(
            "font-inter relative antialiased",
            fontInter.className,
            fontInter.variable,
            fontMono.variable,
            "dark",
          )}
        >
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
