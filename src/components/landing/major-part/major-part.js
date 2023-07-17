import css from "./major-part.module.css";
import icon1 from "../../../assets/landing/feature/icon-1.png";
import icon2 from "../../../assets/landing/feature/icon-2.png";
import icon3 from "../../../assets/landing/feature/icon-3.png";
import icon4 from "../../../assets/landing/feature/icon-4.png";
import icon5 from "../../../assets/landing/feature/icon-5.png";
import icon6 from "../../../assets/landing/feature/icon-6.png";
import HeaderTitle from "../../shared/header-title/header-title";

const data = [
  { id: 1, imgPath: icon1 },
  { id: 2, imgPath: icon2 },
  { id: 3, imgPath: icon3 },
  { id: 4, imgPath: icon4 },
  { id: 5, imgPath: icon5 },
  { id: 6, imgPath: icon6 },
];

const Major = () => {
  const title = "The majority our customers do not understand their workflows.";
  const subTitle ="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className={css.majorContainer}>
      <HeaderTitle title={title} subTitle={subTitle} />
      <div className={css.featureBox}>
        {data.map((el) => {
          return (
            <div data-aos="fade-up" key={el.id} className={css.features}>
              <img className={css.featureIcon} src={el.imgPath} alt="icon" />
              <h3 className={css.featureTitle}>Instant Features</h3>
              <p className={css.featureDesc}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Major;
