import classes from "./Container.module.scss";
import clsx from "clsx";

export default function Container({ children, className }) {
  return <div className={clsx(classes.root, className)}>{children}</div>;
}
