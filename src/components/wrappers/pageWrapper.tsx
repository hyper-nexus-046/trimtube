import type { ReactNode } from "react";

export const PageWrapper = ({
  children,
  showCta = true,
  showFooter = true,
}: Readonly<{
  children: ReactNode;
  showCta?: boolean;
  showFooter?: boolean;
}>) => {
  return <>{children}</>;
};
