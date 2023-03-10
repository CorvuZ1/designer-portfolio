import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import { Inter } from "@next/font/google";
import classes from "./Layout.module.scss";
import Container from "@/components/Container/Container";
import clsx from "clsx";
import { motion } from "framer-motion";

const inter = Inter({ weight: ["700", "400", "600"], subsets: ["cyrillic"] });

export default function Layout({ children, title }) {
  const titleWithName = `${title} | ALEXEY.PETROVICH`;

  return (
    <>
      <Head>
        <title>{titleWithName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={clsx(inter.className, classes.container)}>
        <Header />
        <motion.main
          initial={{ y: "5vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.23, type: "spring", bounce: 0.5, duration: 0.9 }}
          className={classes.main}
        >
          {children}
        </motion.main>
        <Footer />
      </Container>
    </>
  );
}
