import { Wrapper } from "../wrappers";
import { siteConfig } from "~/config/site";
import Link from "next/link";

export const Footer = () => {
  const groupedData = siteConfig.mainNav.reduce<Record<string, any[]>>(
    (acc, item) => {
      if (item.type !== "dropdown") {
        const group = item.group;
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(item);
      }
      return acc;
    },
    {},
  );

  return (
    <Wrapper className="pb-content-sm">
      <footer className="grid gap-6 gap-y-7 border-b border-t py-content md:grid-cols-[3fr_1fr_1fr_1fr]">
        <div>
          <h5 className="text-heading-h7 font-medium">Trimtube</h5>
          <p className="sm:4/5 pt-2 text-sm font-light lg:w-3/5">
            Your trusted partner in AI solutions, creating smarter systems for
            smarter businesses.
          </p>
        </div>
        {Object.entries(groupedData).map(([group, items]) => (
          <div key={group}>
            <h5 className="text-base font-medium">{group}</h5>
            <ul className="mt-3 space-y-3">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={(item as { href: string }).href ?? "#"}
                    className="block text-sm hover:text-primary"
                  >
                    {(item as { title: string }).title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="py-content-sm">
        <span className="text-sm text-secondary-foreground">
          © {new Date().getFullYear()} Trimtube 11376, 169 Madison Ave, New
          York, NY 10016. All rights reserved.
        </span>
      </div>
    </Wrapper>
  );
};
