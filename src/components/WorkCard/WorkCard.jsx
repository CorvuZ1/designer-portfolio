import classes from "./WorkCard.module.scss";
import Image from "next/image";
import { Manrope } from "@next/font/google";
import clsx from "clsx";

const manrope = Manrope({ weight: "600", subsets: ["cyrillic"] });

export default function WorkCard({ title, content, image }) {
  return (
    <a href="#" className={classes.root}>
      <Image
        priority
        quality={95}
        className={classes.image}
        width={602}
        height={405}
        alt={image?.node?.altText}
        src={image?.node?.sourceUrl}
      />
      <span className={clsx(manrope.className, classes.title)}>{title}</span>
    </a>
  );
}
