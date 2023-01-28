import Layout from "@/components/Layout/Layout";
import WorkList from "@/components/WorkList/WorkList";
import { getAllWorks } from "@/lib/requests/queries";

export default function HomePage({ works }) {
  return (
    <Layout title="Главная">
      <h4>МОИ РАБОТЫ</h4>
      <WorkList works={works} />
    </Layout>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();

  return {
    props: {
      works
    },
    revalidate: 300
  };
}
