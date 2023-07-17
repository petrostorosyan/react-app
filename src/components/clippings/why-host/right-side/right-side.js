import css from "./right-side.module.css";

const arr = [
  {
    id: 1,
    title: "Free For Life",
    desc: "Our free tier costs nothing, is perfect for displaying a small selection of clips, and will always be free.",
  },
  {
    id: 2,
    title: "Superb Support",
    desc: "Need help with your portfolio? Were on hand, answering most queries within 24 hours.",
  },
  {
    id: 3,
    title: "Beautiful Layout",
    desc: "Our refreshed layout blows the competition out of the water. Fast and easy to customize, with zero technical skills required.",
  },
  {
    id: 4,
    title: "SEO Friendly",
    desc: "Were the highest-ranked portfolio site out there, so you can be sure youll appear in the right places.",
  },
  {
    id: 5,
    title: "Friendly Community",
    desc: "Looking for advice? Our friendly Facebook group is here for you, with thousands of experienced journalists to lend a hand.",
  },
  {
    id: 6,
    title: "Easy Billing",
    desc: "If you want to upgrade to Clippings.me Premium, we charge $9.99/month and you can cancel anytime",
  },
];

const HostRightSide = () => {
  return (
    <div className={css.rightSideContainer}>
      {arr.map((elem) => {
        return (
          <div key={elem.id} className={css.item}>
            <h2 className={css.title}>{elem.title}</h2>
            <p className={css.desc}>{elem.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HostRightSide;
