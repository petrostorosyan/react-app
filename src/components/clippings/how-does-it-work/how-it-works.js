import css from "./how-it-works.module.css";
import InfoBox from "./info-box/info-box";

const HowItWorks = () => {
  return (
    <div className={css.howItContainer}>
      <div className={css.howItContent}>
        <div className={css.header}>
          <h1 className={css.title}>How does it work?</h1>
          <p className={css.description}>
            No tech skills? No problem! Setting up your portfolio is easy, and
            takes just a few minutes.
          </p>
        </div>
        <InfoBox /> 
      </div>
    </div>
  );
};

export default HowItWorks;
