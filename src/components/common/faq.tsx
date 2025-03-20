import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Card } from "~/components/ui/card";
import { TitledWrapper } from "~/components/wrappers/titleWrapper";

export const Faq = ({
  title = "",
  description = "",
  data,
  className = "mb-content-lg",
  classTitle,
  classPara,
  accordClass,
  headingLevel = "h2",
  longTitle = false,
}: {
  title?: string;
  description?: string;
  data: { id: number; question: string; answer: string }[];
  className?: string;
  classTitle?: string;
  classPara?: string;
  accordClass?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  longTitle?: boolean;
}) => {
  return (
    <TitledWrapper
      title={title || "We’re here to help"}
      para={description || "FAQs designed to provide the information you need."}
      titleClasses={classTitle}
      paraClasses={classPara}
      headingLevel={headingLevel}
      className={className}
      longTitle={longTitle}
      sectionName="FAQs"
    >
      <div className="relative">
        <Accordion
          defaultValue={data[0] ? String(data[0].id) : undefined}
          type="single"
          collapsible
          className={cn("relative z-30", accordClass)}
        >
          {data.map((item) => (
            <Card className="mb-4 bg-[rgba(255,255,255,0.06)]" key={item.id}>
              <AccordionItem
                className="border-none px-4"
                value={String(item.id)}
              >
                <AccordionTrigger className="text-sm lg:text-[18px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-6 text-secondary-foreground lg:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>
        <div className="absolute inset-0 z-10 mx-auto w-[85%] bg-[url('/common/faq-overlay-elipse.svg')] bg-cover bg-center opacity-15 blur-2xl" />
      </div>
    </TitledWrapper>
  );
};
