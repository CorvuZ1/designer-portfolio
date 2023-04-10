import classes from "./Section.module.scss";

export default function Section({ children }) {
  return <section className={classes.root}>{children}</section>;
}
