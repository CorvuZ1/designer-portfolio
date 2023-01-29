import Layout from "@/components/Layout/Layout";
import { getWorkData } from "@/lib/requests/queries";

export default function WorkPage({ title, content }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const workData = await getWorkData(ctx.params.slug);
  const { title, content } = workData;

  return {
    props: {
      title,
      content
    },
    revalidate: 120
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking"
  };
}
