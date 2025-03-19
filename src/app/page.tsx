import Header from "~/components/common/header";
import { Faq } from "~/components/common/faq";
import data from "~/content/json-files/faq.json";
import { PageWrapper } from "~/components/wrappers/pageWrapper";

export default async function HomePage() {
  return (
    <PageWrapper>
      <Header />
      <Faq data={data} />
    </PageWrapper>
  );
}
