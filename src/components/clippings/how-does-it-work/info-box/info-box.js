import css from "./info-box.module.css";
import icon1 from "../../../../assets/how-it-works/icon-1.svg";
import icon2 from "../../../../assets/how-it-works/icon-2.svg";
import icon3 from "../../../../assets/how-it-works/icon-3.svg";
import icon4 from "../../../../assets/how-it-works/icon-4.svg";
import icon5 from "../../../../assets/how-it-works/icon-5.svg";
import icon6 from "../../../../assets/how-it-works/icon-6.svg";
import icon7 from "../../../../assets/how-it-works/icon-7.svg";
import icon8 from "../../../../assets/how-it-works/icon-8.svg";
import Slider from "../slider/slider";

const arr1 = [
  {
    id: 1,
    imgPath: icon1,
    title: "Add biography",
    desc: "Tell people who you are, what you do, and how to keep in contact with you.",
  },
  {
    id: 2,
    imgPath: icon2,
    title: "Customize look & feel",
    desc: "Choose your own background picture or use one of ours - its totally up to you.",
  },
  {
    id: 3,
    imgPath: icon3,
    title: "Add your work",
    desc: "Add online articles or PDFs to showcase your best stories, quickly and easily.",
  },
];

const arr2 = [
  {
    id: 4,
    imgPath: icon4,
    title: "Look good on the go",
    desc: "Tell people to keep up with you on any device - Clippings.me looks great on mobile.",
  },
  {
    id: 5,
    imgPath: icon5,
    title: "Use multimedia",
    desc: "Embed YouTube, Vimeo or SoundCloud files within your online writing portfolio.",
  },
];

const arr3 = [
  {
    id: 6,
    imgPath: icon6,
    title: "Get detailed stats",
    desc: "Integrate with Google Analytics to see how often your profile is visited.",
  },
  {
    id: 7,
    imgPath: icon7,
    title: "Receive mail",
    desc: "Set up a spam-protected contact form for visitors to get in touch.",
  },
  {
    id: 8,
    imgPath: icon8,
    title: "Use any address",
    desc: "Use your own custom URL domain with your writing portfolio for a memorable name.",
  },
];

const InfoBox = () => {
  return (
    <div className={css.infoContainer}>
      <div className={css.content}>
        {arr1.map((elm) => {
          return (
            <div key={elm.id} className={css.itemsOne}>
              <img className={css.image} src={elm.imgPath} alt="icon" />
              <div className={css.infoBox}>
                <h2 className={css.title}>{elm.title}</h2>
                <p className={css.desc}>{elm.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={css.content}>
        {arr2.map((elm) => {
          return (
            <div key={elm.id} className={css.itemsOne}>
              <img className={css.image} src={elm.imgPath} alt="icon" />
              <div className={css.infoBox}>
                <h2 className={css.title}>{elm.title}</h2>
                <p className={css.desc}>{elm.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={css.content}>
        {arr3.map((elm) => {
          return (
            <div key={elm.id} className={css.itemsOne}>
              <img className={css.image} src={elm.imgPath} alt="icon" />
              <div className={css.infoBox}>
                <h2 className={css.title}>{elm.title}</h2>
                <p className={css.desc}>{elm.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Slider />
    </div>
  );
};

export default InfoBox;
