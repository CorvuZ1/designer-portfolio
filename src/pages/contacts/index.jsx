import Button from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import Heading from "@/components/Heading/Heading";
import Layout from "@/components/Layout/Layout";
import Section from "@/components/Section/Section";
import { getAllSocialMedia } from "@/lib/requests/queries";

export default function ContactsPage({ links }) {
  return (
    <Layout title="Контакты">
      <Section>
        <Heading type="h2" mb="large" isCentered={true}>
          Как со мной связаться?
        </Heading>
        {links.map(({ title, linkTo, img }, index) => (
          <Button
            key={index}
            type="a"
            isGroup={true}
            isCentered={true}
            href={linkTo}
            imgSrc={img.sourceUrl}
            imgAlt={img.altText}
          >
            {title}
          </Button>
        ))}
      </Section>

      <Section>
        <Heading type="h2" mb="large" isCentered={true}>
          Вы можете написать мне сообщение и я свами свяжусь
        </Heading>
        <Form />
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const links = await getAllSocialMedia();

  return {
    props: {
      links
    },
    revalidate: 120
  };
}
