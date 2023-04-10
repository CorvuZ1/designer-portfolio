import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import Layout from "@/components/Layout/Layout";
import WorkList from "@/components/WorkList/WorkList";
import { getAllWorks } from "@/lib/requests/queries";

export default function HomePage({ works }) {
  return (
    <Layout title="Главная">
      <Heading mb="small">МОИ РАБОТЫ</Heading>
      <WorkList works={works} />
      <Button type="inner-link" href="/contacts" isCentered={true}>
        НАПИСАТЬ МНЕ
      </Button>
    </Layout>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();

  return {
    props: {
      works
    },
    revalidate: 120
  };
}
