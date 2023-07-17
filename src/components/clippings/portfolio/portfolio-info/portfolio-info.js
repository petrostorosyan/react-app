import css from "./portfolio-info.module.css";
import hubspot from "../../../../assets/portfolio/hubspot.webp";
import writer from "../../../../assets/portfolio/writer.webp";
import poynter from "../../../../assets/portfolio/poynter.webp";

const PortfolioInfo = () => {
  return (
    <div className={css.infoContainer}>
      <h1 className={css.infoTitle}>
        Beautiful Online Portfolios for Journalists, Bloggers and Writers
      </h1>
      <h2 className={css.join}>Join 100,000+ Clippings.me users free today!</h2>
      <p className={css.description}>
        Add your best work, customize your page and then share your online
        portfolio with the world – without a single line of code. Thousands of
        writers trust us with their work, and building your free online
        portfolio takes just minutes.
      </p>
      <div className={css.usersJoin}>
        <button className={css.btn}>
          <a href='/clippings' className={css.btnLink}>SIGN UP</a>
        </button>
        <div className={css.users}>
          <svg
            className={css.svg}           
            viewBox="0 0 100 51"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            
              d="M74.9875,50.877193 L25.0083333,50.877193 L25,48.2358187 C25,42.8979532 25.4166667,39.8156433 31.6166667,38.3571637 C38.6333333,36.7078947 45.55,35.2366959 42.2208333,28.9915205 C32.3625,10.4934211 39.4125,0 49.9958333,0 C60.375,0 67.6041667,10.1033626 57.7708333,28.9957602 C54.5416667,35.2027778 61.2125,36.6782164 68.375,38.3614035 C74.5833333,39.819883 74.9958333,42.9064327 74.9958333,48.2527778 L74.9875,50.877193 Z M95.0333333,41.4903509 C89.6583333,40.2269006 84.6583333,39.1203216 87.0791667,34.4650585 C94.45,20.2957602 89.0333333,12.7192982 81.2458333,12.7192982 C75.975,12.7192982 71.8791667,16.1831871 71.8791667,22.5725146 C71.8791667,39.1203216 81.3291667,30.0769006 81.2375,50.877193 L99.9916667,50.877193 L100,48.9141813 C100,44.9033626 99.6916667,42.5842105 95.0333333,41.4903509 Z M0.00833333333,50.877193 L18.7625,50.877193 C18.675,30.0769006 28.1208333,39.1245614 28.1208333,22.5725146 C28.1208333,16.1831871 24.025,12.7192982 18.7541667,12.7192982 C10.9666667,12.7192982 5.55,20.2957602 12.925,34.4650585 C15.3458333,39.1245614 10.3458333,40.2269006 4.97083333,41.4903509 C0.308333333,42.5842105 0,44.9033626 0,48.9141813 L0.00833333333,50.877193 Z"
              fill="#65BBB7"
            ></path>
          </svg>
          <p className={css.desc}>747 users joined us in the last 7 days</p>
        </div>
      </div>
      <div className={css.images}>
        <img className={css.img} src={hubspot} alt='hubspot' />
        <img className={css.img} src={writer} alt='writer' />
        <img className={css.img} src={poynter} alt='poynter' />
      </div>
    </div>
  );
};

export default PortfolioInfo;
