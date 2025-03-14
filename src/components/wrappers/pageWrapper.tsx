import type { ReactNode } from "react";

export const PageWrapper = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <>{children}</>;
};
