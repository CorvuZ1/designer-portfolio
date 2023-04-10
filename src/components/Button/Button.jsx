import clsx from "clsx";
import Link from "next/link";
import classes from "./Button.module.scss";
import { manrope } from "@/lib/fonts";
import Image from "next/image";

export default function Button({
  type = "button",
  href,
  children,
  className,
  imgSrc = "",
  imgAlt = "",
  isGroup,
  isCentered
}) {
  let Tag = type;

  if (type === "inner-link") {
    Tag = Link;
  }

  let linkTo = {};
  if (href) {
    linkTo = { href };
  }

  return (
    <Tag
      {...linkTo}
      className={clsx(
        className,
        classes.root,
        manrope.className,
        isGroup && classes.group,
        isCentered && classes.center
      )}
    >
      <div className={classes["img-wrapper"]}>
        {imgSrc && (
          <Image
            className={classes.img}
            quality={100}
            width={30}
            height={30}
            src={imgSrc}
            alt={imgAlt}
          />
        )}
      </div>
      {children}
    </Tag>
  );
}
