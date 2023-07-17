import css from "./proud-work.module.css";

const ProudWork = () => {
  return (
    <div className={css.proudWorkConteiner}>
      <div className={css.proudWorkContent}>
        <div className={css.tileInfo}>
          <h1 className={css.title}>PROUD OF YOUR WORK?</h1>
          <div className={css.line}></div>
        </div>
        <h3 className={css.desc}>Build your online writing portfolio website, today!</h3>
        <button className={css.btn}>
            <a href="/clippings" className={css.btnLink}>
              GET STARTED
            </a>
          </button>
      </div>
    </div>
  );
};

export default ProudWork;
