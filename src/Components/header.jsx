//IMPORT REACT
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//IMPORT IMAGENS E ICONES
import logo from "../svg/logo-LEAPS.svg";
import iconLogado from "../svg/icon-userLogado.svg";
import iconLogout from "../svg/icon-logout.svg";

//IMPORT AXIOS
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getLoggedUser();
  }, []);

  const getLoggedUser = async () => {
    const user_token = sessionStorage.getItem("token");

    const url = `http://localhost:5000/user/retrieve/${user_token}`;

    const user_data = await axios.get(url, {
      headers: {
        Authorization: `Basic ${user_token}`,
      },
    });
    setUser(user_data.data.data);
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    document.location.reload(true);
  };

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]); 

  const loginIcon = () => {
    if (user) {
      return (
        <>
          <div className="cta-desktop ml-3 flex">
            <img
              src={iconLogout}
              className="icon-ss ml-3 mb-1 mr-2"
              alt=""
              onClick={() => logOut()}
            />
            <img
              src={iconLogado}
              className="icon-m icon-logado cursor-pointer"
              alt=""
            />
          </div>
          <Link className="text-Userlogado ml-2">Olá, {user.name}</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className="btn" onClick={onTop}>
            Login
          </Link>
        </>
      );
    }
  };

  const adminButton = () => {
    if (user !== null && user.user_type === "ADMIN") {
      return (
        <>
          <li>
            <Link
              to="/adm"
              className="p-1"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Admin
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <header className="px-2 py-1" data-aos="fade-down">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link
                to="/tests"
                className="p-1" onClick={onTop}
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Testes
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="p-1" onClick={onTop}
                data-aos="fade-down"
                data-aos-delay="600"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="p-1" onClick={onTop}
                data-aos="fade-down"
                data-aos-delay="800"
              >
                Contato
              </Link>
            </li>
            {adminButton()}
          </ul>
        </nav>

        <div className="bx"></div>
        <div
          className="flex-start-row"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="cta-desktop ml-3 d-table">{loginIcon()}</div>

          <div className="cta-mobile">
            <Link to="/login" className="link color-primary" onClick={onTop}>
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/tests" className="link-menu-mobile" onClick={onTop}>
                Testes
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-menu-mobile" onClick={onTop}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile" onClick={onTop}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
