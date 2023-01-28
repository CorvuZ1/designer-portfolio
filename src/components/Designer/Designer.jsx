import Link from "next/link";
import classes from "./Designer.module.scss";

export default function Designer({ withCaption = true }) {
  return (
    <Link href="/" className={classes.root}>
      <div>
        <span className={classes.name}>ALEXEY.</span>
        <span className={classes.patronymic}>PETROVICH</span>
      </div>
      {withCaption && <div className={classes.caption}>designer</div>}
    </Link>
  );
}
