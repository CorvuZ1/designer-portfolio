import Heading from "@/components/Heading/Heading";
import Layout from "@/components/Layout/Layout";
import About from "@/components/About/About";
import { getAboutData } from "@/lib/requests/queries";

export default function AboutPage({ greeting, image, description }) {
  return (
    <Layout title="Обо мне">
      <Heading mb="xlarge">ОБО МНЕ</Heading>
      <About greeting={greeting} image={image} description={description} />
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutData = await getAboutData();

  return {
    props: {
      greeting: aboutData.title,
      image: aboutData.image,
      description: aboutData.editor.content
    },
    revalidate: 120
  };
}
