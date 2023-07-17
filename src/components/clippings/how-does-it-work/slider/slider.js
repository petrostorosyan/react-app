import css from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper";
import natalie from "../../../../assets/how-it-works/natalie.webp";
import shawnna from "../../../../assets/how-it-works/shawnna.webp";
import miranda from "../../../../assets/how-it-works/miranda.webp";
import chris from "../../../../assets/how-it-works/chris.webp";

const info = [
  {
    id: 1,
    imgPath: natalie,
    description:
      "I have been putting off creating a website to showcase my work for the longest time because of how tedious it was to put everything together – thankfully, I stumbled upon Clippings.me. I found it incredibly easy to navigate.",
    subTitle: "Natalie Khoo, Premium Subscriber",
  },
  {
    id: 2,
    imgPath: shawnna,
    description:
      '"I knocked my portfolio out last night in three hours and I cannot tell you how thrilled I am to have it done. Your site was so easy to use and I think my end result looks phenomenal."',
    subTitle: "Shawnna Stiver, Content Manager & Copy Strategist",
  },
  {
    id: 3,
    imgPath: miranda,
    description:
      '"The new site and mobile layout is 👌🏼... Now, there are separate tabs for my writing and styling projects! Yeahhh ☺️"',
    subTitle: "MIRANDA MCDONALD, FREELANCE WRITER AND STYLIST",
  },
  {
    id: 4,
    imgPath: chris,
    description:
      '"Clippings.me is a great online resource – a highly visual archive of your published stories that potential employers, publishers and other contacts can easily peruse."',
    subTitle: "Chris Maher, Freelance Journalist",
  },
];

const Slider = () => {
  return (
    <div className={css.carousel}>
      <div className={css.tileInfo}>
        <h1 className={css.title}>WHAT OUR USERS SAY</h1>
        <div className={css.line}></div>
      </div>
      <div className="mySwiper">
        <Swiper
          className={css.slide}
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {info.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <div  className={css.slideInfo}>
                  <img className={css.slideImg} src={el.imgPath} alt="title" />
                  <p className={css.description}>{el.description}</p>
                  <p className={css.subTitle}>{el.subTitle}</p>
                </div>
              </SwiperSlide>
            );
          })}          
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
