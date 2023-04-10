import { useEffect, useState } from "react";
import Designer from "../Designer/Designer";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.root}>
      <div className={classes.inner}>
        <Designer withCaption={false} />
      </div>
    </footer>
  );
}
