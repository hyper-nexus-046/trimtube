import React, { type ReactNode } from "react";

import { cn } from "~/lib/utils";
import { BottomCta } from "~/components/common/bottom-cta";
import { Footer } from "~/components/common/footer";

export const PageWrapper = ({
  children,
  showCta = true,
  showFooter = true,
  className,
}: {
  children: ReactNode;
  showCta?: boolean;
  showFooter?: boolean;
  className?: string;
}) => {
  return (
    <main className={cn(className)}>
      {children}
      {showCta && <BottomCta />}
      {showFooter && <Footer />}
    </main>
  );
};
