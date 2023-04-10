import Designer from "../Designer/Designer";
import { motion } from "framer-motion";
import classes from "./Header.module.scss";
import NavLink from "../NavLink/NavLink";

export default function Header() {
  const animations = {
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, type: "spring", bounce: 0.4 }
  };

  return (
    <header className={classes.root}>
      <nav className={classes.inner}>
        <motion.div
          {...animations}
          initial={{ x: "-15vw", opacity: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1.015 }}
          className={classes.left}
        >
          <Designer />
        </motion.div>

        <motion.div {...animations} initial={{ x: "15vw", opacity: 0 }} className={classes.links}>
          <NavLink href="/contacts">КОНТАКТЫ</NavLink>
          <NavLink href="/about">ОБО МНЕ</NavLink>
        </motion.div>
      </nav>
    </header>
  );
}
