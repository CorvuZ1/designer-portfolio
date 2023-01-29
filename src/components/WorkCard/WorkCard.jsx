import classes from "./WorkCard.module.scss";
import Image from "next/image";
import { Manrope } from "@next/font/google";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const manrope = Manrope({ weight: "600", subsets: ["cyrillic"] });

export default function WorkCard({ title, image, index, slug }) {
  const delay = 0.7;

  return (
    <Link href={`work/${slug}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: index / 5 + delay }}
        className={classes.root}
      >
        <Image
          priority
          quality={95}
          className={classes.image}
          width={602}
          height={405}
          alt={image?.node?.altText}
          src={image.node.sourceUrl}
        />
        <span className={clsx(manrope.className, classes.title)}>{title}</span>
      </motion.div>
    </Link>
  );
}
