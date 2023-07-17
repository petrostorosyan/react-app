import css from "./recommended.module.css";
import academies from "../../../assets/recommended/clippingsme-academias.webp";
import pointer from "../../../assets/recommended/poynter.webp";
import journalism from "../../../assets/recommended/journalism.webp";
import freelancers from "../../../assets/recommended/freelancers.webp";
import prDaily from "../../../assets/recommended/ragans.webp";
import writer from "../../../assets/recommended/the-writer.webp";

const imgArray = [
  { id: 1, imgPath: pointer },
  { id: 2, imgPath: journalism },
  { id: 3, imgPath: freelancers },
  { id: 4, imgPath: prDaily },
  { id: 5, imgPath: writer },
];

const Recommended = () => {
  return (
    <div className={css.recommendedContainer}>
      <div className={css.recommendedContent}>
        <h1 className={css.title}>We Come Highly Recommended</h1>
        <p className={css.subTitle}>
          Editors and journalism schools around the world recommend our online
          writing portfolios - and we've been reviewed by some of the best names
          in the industry.
        </p>
        <img className={css.academies} src={academies} alt="academies" />
        <div className={css.images}>
          {imgArray.map((elem) => {
            return <img  key={elem.id} className={css.img} src={elem.imgPath} alt="pice" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
