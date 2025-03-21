import Image from "next/image";

import { Card, CardContent } from "~/components/ui/card";
import { TitledWrapper } from "~/components/wrappers/title-wrapper";

import { TestimonialsData } from "./testimonials-data";

export const Testimonials = () => {
  return (
    <TitledWrapper
      title="Trusted by satisfied clients"
      para="Discover how we’ve driven growth and innovation."
      sectionName="Testimonials"
      className="mb-content-lg"
      isMax
    >
      <div className="grid gap-6 pt-content-sm md:grid-cols-2 lg:grid-cols-3">
        {TestimonialsData.map((testimonial, index) => (
          <Card
            key={index}
            className="lower-opacity-background relative overflow-hidden rounded-[30px] border-secondary text-muted-foreground"
          >
            <CardContent className="flex h-full flex-col gap-5 p-5">
              <div className="flex-1">
                <p>&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="rounded-sm bg-secondary p-1">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="h-11 w-11 rounded-sm"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium text-secondary-foreground">
                    {testimonial.name}
                  </h4>
                  <p>
                    {testimonial.title} : {testimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
            <div className="absolute -right-3 top-0 z-50 h-2/5 w-1/4 bg-[rgba(81,47,235,0.5)] blur-[50px]" />
          </Card>
        ))}
      </div>
    </TitledWrapper>
  );
};
