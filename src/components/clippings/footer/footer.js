import css from "./footer.module.css";
import logo from "../../../assets/header/clippingsme-logo_light.svg";
import fbLogo from "../../../assets/footer/fb-icon.svg";
import twitterLogo from "../../../assets/footer/twitter-icon.svg";

const Footer = () => {
  return (
    <div className={css.foterContainer}>
      <div className={css.footerContent}>
        <div className={css.base}>
          <img className={css.img} src={logo} alt="logo" />
          <p className={css.baseItem}>About</p>
          <p className={css.baseItem}>Blog</p>
          <p className={css.baseItem}>Terms and Conditions</p>
          <p className={css.baseItem}>Contact</p>
        </div>
        <div className={css.tools}>
          <p className={css.blueTitle}>TOOLS</p>
          <div className={css.line}></div>
          <div className={css.nav}>
            <p className={css.item}>Journalist Directory</p>
            <p className={css.item}>Writing Portfolio Guide</p>
            <p className={css.item}>Writing Portfolio Examples</p>
            <p className={css.item}>
              Guide To International Invoice Payments For Freelancers
            </p>
            <p className={css.item}>International PayPal Fee Calculator</p>
          </div>
        </div>
        <div className={css.support}>
          <p className={css.blueTitle}>SUPPORT</p>
          <div className={css.lineTwo}></div>
          <div className={css.nav}>
            <p className={css.item}>Help Center</p>
            <p className={css.item}>Email Us</p>
          </div>
        </div>
        <div className={css.copyright}>
          <div className={css.icons}>
            <a className={css.link} href="/">
              <img className={css.icon} src={fbLogo} alt="Facebook" />
            </a>
            <a className={css.link} href="/">
              <img className={css.icon} src={twitterLogo} alt="Twitter" />
            </a>
          </div>
          <div className={css.texts}>
            <p className={css.copyrightText}>Copyright © 2023 Clippings.me.</p>
            <p className={css.copyrightText}>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
