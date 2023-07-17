import HeaderTitle from "../../shared/header-title/header-title";
import css from "./review.module.css";
import user1 from "../../../assets/landing/reviews/testimonial-01.webp";
import user2 from "../../../assets/landing/reviews/testimonial-02.webp";
import user3 from "../../../assets/landing/reviews/testimonial-03.webp";

const Reviews = () => {
  const userData = [
    { id: 1, imgPath: user1 },
    { id: 2, imgPath: user2 },
    { id: 3, imgPath: user3 },
  ];

  const title = "Don't take our word for it ";
  const subTitle =
    "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.";

  return (
    <div data-aos="zoom-out-up" className={css.reviewsContainer}>
      <HeaderTitle title={title} subTitle={subTitle} />
      <div className={css.reviewInfo}>
        {userData.map((el) => (
          <div data-aos="fade-up" data-aos-delay="400" key={el.id} className={css.reviewBox}>
            <div className={css.imgDecor}>
              <img className={css.img} src={el.imgPath} alt="client1" />
              <svg
                className={css.svg}
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.decor}
                  d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                ></path>
              </svg>
            </div>
            <p className={css.desc}>
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <div className={css.line}></div>
            <div className={css.bottomInfo}>
              <div className={css.userName}>Anastasia Dan</div>
              <a className={css.link} href="#9">
                UX Board
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
