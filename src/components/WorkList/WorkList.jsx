import classes from "./WorkList.module.scss";
import WorkCard from "../WorkCard/WorkCard";

export default function WorkList({ works }) {
  return (
    <div className={classes.root}>
      {works.map(({ title, id, featuredImage, slug }, index) => (
        <WorkCard key={id} slug={slug} id={id} index={index} title={title} image={featuredImage} />
      ))}
    </div>
  );
}
