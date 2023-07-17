import css from "./header-title.module.css";

const HeaderTitle = (props) => {
  return (
    <div data-aos="zoom-in" className={css.headerTitleContainer}>
      <h1 className={css.title} style={{ fontSize: props.fontSize }}>
        {props.title}
      </h1>
      <p className={css.subTitle}> {props.subTitle}</p>
    </div>
  );
};

export default HeaderTitle;
