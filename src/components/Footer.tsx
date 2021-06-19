import logoText from "../img/sprite/logoText.svg";
import "../styles/style.scss";
import {EMAIL_URL, FACEBOOK_URL, INSTAGRAM_URL, TELEGRAM_URL, VK_URL, YOUTUBE_URL} from "../constants";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <NavLink to="/">
              <img src={logoText} style={{ width: 150, height: 40 }} alt="Logo Text" />
            </NavLink>
          </div>
          <div className="social">
            <a
              href={VK_URL}
              target="_blank"
              className="vk"
              rel="noopener noreferrer"
            > </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              className="facebook"
              rel="noopener noreferrer"
            > </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              className="youtube"
              rel="noopener noreferrer"
            > </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="instagram"
              rel="noopener noreferrer"
            > </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              className="telegram"
              rel="noopener noreferrer"
            > </a>
            <a
              href={`mailto:${EMAIL_URL}`}
              target="_blank"
              className="email"
              rel="noopener noreferrer"
            > </a>
            <div className="clear"></div>
          </div>




          <div className="footer__right">

          
            <nav className="footer_info">
              <ul className="footer__menu">
                <li className="footer__item">
                  <NavLink to="/faq" className="footer__link">
                    FAQ
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/support" className="footer__link">
                    Обратная связь
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
