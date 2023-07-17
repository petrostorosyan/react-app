import PortfolioInfo from "./portfolio-info/portfolio-info";
import css from "./portfolio.module.css";
import decor from "../../../assets/portfolio/decor.svg";
import portfolio from "../../../assets/portfolio/portfolio.webp";

const PortfolioContent = () => {
  return (
    <div className={css.portfolioContainer}>
      <div className={css.portfolioContent}>
        <div className={css.portfolioInfo}>
          <PortfolioInfo />
        </div>
        <div className={css.decor}><img src={decor} alt="decor"/></div>
        <div className={css.portfolio}><img src={portfolio} alt="portfolio"/></div>
      </div>
    </div>
  );
};

export default PortfolioContent;
