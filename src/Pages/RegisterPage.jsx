//IMPORT SVGS
import iconLogo from "../svg/logo-LEAPS.svg";
import iconName from "../svg/icon-user2.svg";
import iconUser from "../svg/icon-user.svg";
import iconPassword from "../svg/icon-password.svg";

//IMPORT COMPONENTS
import Footer from "../Components/footer";
import Header from "../Components/header";

//IMPORT REACT
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//IMPORT AXIOS
import axios from "axios";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

//IMPORT TOAST
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async () => {
    const url = `http://localhost:5000/user/create`;

    const data = {
      name: name,
      username: username,
      password: password,
      user_type: "STUDENT",
    };

    await axios.post(url, data);
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
          <div className="grid-4 disappear"></div>
          <div className="grid-4 mt-5 mb-5">
            <div data-aos="fade-down" data-aos-delay="200">
              <div className="flex-center">
                <img src={iconLogo} className="logo-login mb-2" alt="" />
              </div>

              <h2 className="text-center mb-3">LEAPS</h2>

              <h6 className="text-center">
                Olá, faça o cadastro para continuar
              </h6>
            </div>

            <form
              className="relative"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <img src={iconName} className="icon-email-register" alt="" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="user"
                className="input-user-login mt-3"
                placeholder="Digite seu nome"
              />

              <img src={iconUser} className="icon-user-register" alt="" />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="user"
                className="input-user-login mt-3"
                placeholder="Digite seu usuário"
              />

              <img
                src={iconPassword}
                className="icon-passoword-register"
                alt=""
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="input-password-login mt-3"
                placeholder="Digite sua senha"
              />
              <Link
                className="btn w-100 mt-4 text-center"
                onClick={() => submitForm()}
                to="/login"
              >
                Iniciar Sessão
              </Link>
            </form>
            <p
              className="text-center mt-2"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Já possui uma conta? <Link to="/login">Iniciar Sessão</Link>{" "}
            </p>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
