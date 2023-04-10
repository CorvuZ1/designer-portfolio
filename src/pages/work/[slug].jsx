import Heading from "@/components/Heading/Heading";
import Layout from "@/components/Layout/Layout";
import { getWorkData } from "@/lib/requests/queries";

export default function WorkPage({ title, content }) {
  return (
    <Layout title={title}>
      <Heading isLargeSize={true}>{title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const workData = await getWorkData(ctx.params.slug);

  return {
    props: {
      title: workData.title,
      content: workData.editor.content
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
