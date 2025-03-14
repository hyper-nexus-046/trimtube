import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TitledWrapper } from "~/components/wrappers";

import { Colors } from "./colors";
import { Typography } from "./typography";

export const Theming = () => {
  const tabsList = [
    {
      key: "colors",
      title: "Colors",
      component: <Colors />,
    },
    {
      key: "typography",
      title: "Typography",
      component: <Typography />,
    },
  ];
  return (
    <TitledWrapper
      isMax
      title="The Trimtube Theme"
      para="Explore our design system's colors and typography to understand how we maintain visual consistency across the platform. Use these guidelines to create cohesive and accessible user interfaces."
    >
      <Tabs defaultValue={tabsList[0]?.key ?? "colors"} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          {tabsList.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsList.map((tab) => (
          <TabsContent key={tab.key} value={tab.key}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </TitledWrapper>
  );
};
