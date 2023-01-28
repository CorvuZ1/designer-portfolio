import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavLink.module.scss";
import { motion } from "framer-motion";

export default function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  let animations = {};
  if (!isActive) {
    animations = {
      whileHover: { scale: 1.07 },
      whileTap: { scale: 1.02 }
    };
  }

  return (
    <Link className={clsx(classes.root, isActive && classes.active)} href={href}>
      <motion.span {...animations}>{children}</motion.span>
    </Link>
  );
}
