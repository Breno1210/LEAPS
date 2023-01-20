//IMPORT COMPONENTS
import Footer from "../Components/footer";
import Header from "../Components/header";

//IMPORT SVG
import iconLogo from "../svg/logo-LEAPS.svg";
import iconUser from "../svg/icon-user.svg";
import iconPassword from "../svg/icon-password.svg";

//IMPORT REACT
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//IMPORT AXIOS
import axios from "axios";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";
//IMPORT TOASTS
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const verifyIdentity = async () => {
    const data = {
      username: username,
      password: password,
    };

    await axios
      .post(`http://localhost:5000/login`, data)
      .then(async (response) => {
        sessionStorage.setItem("token", response.data.data.token);
        toast.success("Usuário criado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      })
      .catch(async () => {
        toast.warning("Usuário ou senha incorreto", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        await delay(2300);
        document.location.reload(true);
      });
  };

  useEffect(() => {
    AOS.init({
      easing: "easy-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear "></div>
          <div className="grid-4 mt-7 mb-8">
            <div data-aos="fade-down" data-aos-delay="400">
              <div className="flex-center">
                <img src={iconLogo} className="logo-login mb-2" alt="" />
              </div>

              <h2 className="text-center mb-3">LEAPS</h2>

              <h6 className="text-center">Olá, faça o login para continuar</h6>
            </div>

            <form
              className="relative"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <img src={iconUser} className="icon-user" alt="" />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="user"
                className="input-user-login mt-3"
                placeholder="Digite seu usuário"
              />
              <img src={iconPassword} className="icon-passoword" alt="" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="input-password-login mt-2"
                placeholder="Digite sua senha"
              />
              <Link
                className="btn-entrar btn w-100 mt-4 text-center"
                onClick={() => verifyIdentity()}
              >
                Entrar
              </Link>
            </form>
            <p
              className="text-center mt-2"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              Não possui uma conta? <Link to="/register">Criar uma conta</Link>
              {""}
            </p>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
