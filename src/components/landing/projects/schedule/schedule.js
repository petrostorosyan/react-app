import css from "./schedule.module.css";

const arr = [
  { id: 1, text: "Duis aute irure dolor in reprehenderit" },
  { id: 2, text: "Excepteur sint occaecat" },
  { id: 3, text: "Amet consectetur adipiscing elit" },
];

const Schedule = () => {
  return (
    <div className={css.scheduleContainer}>
      <p className={css.italicTitle}>More speed. Less spend</p>
      <h3 className={css.scheduleTitle}>Keep projects on schedule</h3>
      <p className={css.scheduleDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ul className={css.list}>
        {arr.map((el) => (
          <li key={el.id} className={css.listItem}>
            <div>
              <svg
                className={css.succesIcon}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
            </div>
            <p className={css.listInfo}>{el.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
