import HostLeftSide from "./left-side/left-side";
import HostRightSide from "./right-side/right-side";
import css from "./why-host.module.css";

const WhyHost = () => {
  return (
    <div className={css.whyHostContainer}>
      <div className={css.whyHostContent}>
        <div className={css.hostLeftSide}>
          <HostLeftSide />
        </div>
        <div className={css.hostRightSide}>
          <HostRightSide />
        </div>
      </div>
    </div>
  );
};

export default WhyHost;
