import styles from "./GridContainer.module.css";
import dynamic from "next/dynamic";


const DynamicGridItem = dynamic(() => import("./GridItem.jsx"), {
  loading: () => <p>Loading....</p>,
});

const GridContainer = ({ data }) => {

  return (

    <div className={styles.container}>
      <p className={styles.about_info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla
        corrupti culpa voluptas blanditiis, asperiores perferendis sit inventore
        recusandae, adipisci id eum.
      </p>
      <div className={styles.grid}>
        {data.map((item, index) => {
          return <DynamicGridItem featured={item} index={index} key={item.fields.id} />;
        })}
      </div>
    </div>
  );
};
export default GridContainer;
