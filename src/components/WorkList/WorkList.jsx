import classes from "./WorkList.module.scss";
import WorkCard from "../WorkCard/WorkCard";
import { motion } from "framer-motion";

export default function WorkList({ works }) {
  let animationStart = 0.5;

  return (
    <div className={classes.root}>
      {works.map(({ title, content, id, featuredImage }) => (
        <motion.div
          drag
          key={id}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (animationStart += 0.15) }}
        >
          <WorkCard title={title} content={content} image={featuredImage} />
        </motion.div>
      ))}
    </div>
  );
}
