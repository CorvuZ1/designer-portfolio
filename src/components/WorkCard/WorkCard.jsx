import classes from "./WorkCard.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { manrope } from "@/lib/fonts";

export default function WorkCard({ title, image, index, slug }) {
  const delay = 0.9;

  return (
    <Link href={`work/${slug}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: index / 2.5 + delay, duration: 0.2 }}
        className={classes.root}
      >
        <Image
          priority
          quality={95}
          className={classes.image}
          width={602}
          height={405}
          alt={image?.altText}
          src={image.sourceUrl}
        />
        <span className={clsx(manrope.className, classes.title)}>{title}</span>
      </motion.div>
    </Link>
  );
}
