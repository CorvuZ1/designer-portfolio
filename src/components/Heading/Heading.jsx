import classes from "./Heading.module.scss";
import clsx from "clsx";

export default function Heading({ type = "h1", mb = "medium", isLargeSize, children, isCentered }) {
  const Tag = type;

  return (
    <Tag
      className={clsx(
        classes.root,
        classes[type],
        classes[`mb-${mb}`],
        isLargeSize && classes["large-size"],
        isCentered && classes.center
      )}
    >
      {children}
    </Tag>
  );
}
