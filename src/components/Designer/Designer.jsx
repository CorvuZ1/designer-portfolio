import Link from "next/link";
import classes from "./Designer.module.scss";

export default function Designer({ withCaption = true }) {
  return (
    <Link href="/" className={classes.root}>
      <span className={classes.name}>ALEXEY.</span>
      <span className={classes.patronymic}>PETROVICH</span>
      {withCaption && <p className={classes.caption}>designer</p>}
    </Link>
  );
}
