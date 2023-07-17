import css from "./navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={css.navContainer}>
      <div className={css.title}>{props.title}</div>
      {props.arr.map((el) => (
        <div key={el.id} className={css.listItems}>
          <a href='#4' className={css.item}>{el.item}</a>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
