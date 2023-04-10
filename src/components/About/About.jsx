import classes from "./About.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { roboto } from "@/lib/fonts";
import Button from "@/components/Button/Button";

export default function About({ greeting, image, description }) {
  return (
    <div className={classes.root}>
      <Image
        quality={95}
        className={classes.image}
        src={image.sourceUrl}
        width={300}
        height={300}
        alt={image?.altText}
      />
      <div className={classes.info}>
        <p className={clsx(classes.greeting, roboto.className)}>{greeting}</p>
        <div
          className={clsx(classes.description, roboto.className)}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <Button type="inner-link" href="/contacts" className={classes.button}>
          НАПИСАТЬ МНЕ
        </Button>
      </div>
    </div>
  );
}
