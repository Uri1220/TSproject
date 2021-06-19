import React, { useContext } from "react";
import logo from "../img/sprite/logo.svg";
import finger from "../img/sprite/finger.svg";
import coin from "../img/sprite/coin.svg";
import "../styles/style.scss";
import { ContextApp, setLogin, setRegisterShow } from "../store/reducer";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { state, dispatch } = useContext(ContextApp);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__content">
          <div    style={{ marginBottom:20 }}className="header__logo">
            <NavLink to="/">
            <h3 className="header__crypto-text">Криптовалютный проект</h3>

              <img src={logo} style={{ width: 312, height: 99 }} alt="" />
              {/* <h3 className="header__crypto-text">Криптовалюта</h3> */}
            </NavLink>
          </div>

          <div className="header__right">
            <nav className="header_info">
              <ul className="header__menu">
                {!state.login ? (
                  <>
                    <li className="header__items header__btn header__price chief__price">
                      <p className="header__price-text chief__price-text">
                        1 билет =
                        <span>
                          <img
                            src={coin}
                            style={{ width: 17, height: 17 }}
                            alt=""
                          />
                          1 ={" "}
                        </span>
                        1 OURO
                      </p>
                    </li>
                    <li className="header__items">
                      <button
                        className="header__buttons header__lk"
                        onClick={() => {
                          setRegisterShow(dispatch, true);
                        }}
                      >
                        Регистрация
                        <img
                          className="header__registr-img"
                          src={finger}
                          alt=""
                        />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="header__items">
                      <button
                        className="header__btn header__exit"
                        onClick={() => {
                          setLogin(dispatch, false);
                          localStorage.clear();
                        }}
                      >
                        Выйти
                      </button>
                    </li>
                    <li className="header__items">
                      <NavLink to="/cabinet">
                        <button className="header__buttons header__lk">
                          Личный кабинет
                        </button>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
