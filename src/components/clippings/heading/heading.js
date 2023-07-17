import css from "./heading.module.css";
import logo from "../../../assets/header/logo.svg";

const ClippingHeader = () => {
  return (
    <div className={css.headerContainer}>
      <div className={css.clippingContent}>
        <div className={css.logo}>
          <img className={css.img} src={logo} alt="logo" />
        </div>
        <div className={css.navigation}>
          <ul className={css.list}>
            <li className={css.listItem}>
              <a className={css.navLink} href="/clippings">
                Examples
              </a>
            </li>
            <li className={css.listItem}>
              <a className={css.navLink} href="/clippings">
                Blog
              </a>
            </li>
            <li className={css.listItem}>
              <a className={css.navLink} href="/clippings">
                Sign In
              </a>
            </li>
            <li>
              <button className={css.btnSignUp}>
                <a className={css.btnLink} href="/clippings">
                  Sign Up
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClippingHeader;
