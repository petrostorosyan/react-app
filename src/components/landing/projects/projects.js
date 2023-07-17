import css from "./projects.module.css";
import Schedule from "./schedule/schedule";
import img1 from "../../../assets/landing/projects/image-01.webp";
import img2 from "../../../assets/landing/projects/image-02.webp";
import img3 from "../../../assets/landing/projects/image-03.webp";
import HeaderTitle from "../../shared/header-title/header-title";

const Projects = () => {

const title = 'One product, unlimited solutions';
const subTitle = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.'


  return (
    <div className={css.projectContainer}>
      <div className={css.greenBox}>Reach goals that matter</div>
      <HeaderTitle title={title} subTitle={subTitle}/>
      <div className={css.projectInformation}>
        <div className={css.infoBox}>
          <div data-aos="fade-right" className={css.leftToRight}>
            <Schedule />
          </div>
          <img data-aos="fade-up" className={css.projectImg} src={img1} alt="img" />
        </div>
        <div className={css.infoBox}>
          <img data-aos="fade-up" className={css.projectImg} src={img2} alt="img" />
          <div data-aos="fade-left" className={css.rightToLeft}>
            <Schedule />
          </div>
        </div>
        <div className={css.infoBox}>
          <div data-aos="fade-right" className={css.leftToRight}>
            <Schedule />
          </div>
          <img data-aos="fade-up" className={css.projectImg} src={img3} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
