import HeaderTitle from "../../shared/header-title/header-title";
import css from "./main-title.module.css";

const MainTitle = () => {
  const title = "Landing template for startups";
  const subTitle =
    "Our landing page template works on all devices, so you only have to setit up once, and get beautiful results forever.";
  const fontSize = 52;

  return (
    <div className={css.titleContainer}>
      <div className={css.titleContent}>
        <HeaderTitle title={title} subTitle={subTitle} fontSize={fontSize} />

        <div className={css.buttons}>
          <a href="#44" className={css.freeTrial}>
            Start free trial
          </a>
          <a href="#55" className={css.learnMore}>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
