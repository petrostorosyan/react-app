import css from "./build-portfolio.module.css";

const BuildPortfolio = () => {
  return (
    <div className={css.buildPorfolioContainer}>
      <div className={css.buildPorfolioContent}>
        <div className={css.leftSide}>
          <h3 className={css.title}>Build Your Portfolio Today - Free!</h3>
          <button className={css.btn}>
            <a href="/clippings" className={css.btnLink}>
              GET STARTED
            </a>
          </button>
        </div>
        <div className={css.rightSide}>
        </div>
      </div>
    </div>
  );
};

export default BuildPortfolio;
