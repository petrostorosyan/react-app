import css from "./writing-portfolio.module.css";

const WritingPortfolio = () => {
  return (
    <div className={css.writingPortfolioConteiner}>
      <div className={css.writingPortfolioContent}>
        <div className={css.centeredBox}>
          <div className={css.infoBox}>
            <p className={css.text}>START LIKE A PRO</p>
          </div>
          <div className={css.titleInfo}>
            <h1 className={css.title}>Writing Portfolio Guide:</h1>
            <br />
            <h1 className={css.title}>Six Simple Steps To Success</h1>
          </div>
          <button className={css.btn}>
            <a href="/clippings" className={css.btnLink}>
              Writing Portfolio Guide
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingPortfolio;
