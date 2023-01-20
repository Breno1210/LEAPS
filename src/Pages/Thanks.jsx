//IMPORT COMPONENTS
import Footer from "../Components/footer";
import Header from "../Components/header";

//IMPORT REACT
import { Link } from "react-router-dom";
import { useEffect } from "react";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

//IMPORT SVGS
import iconLogo from "../svg/logo-LEAPS.svg";

const Thanks = () => {
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
        <div data-aos="fade-down" data-aos-delay="200">
          <div className="row flex-center mt-7">
            <img src={iconLogo} className="logo-login mb-2" alt="" />
          </div>

          <h3 className="text-center">LEAPS</h3>
        </div>

        <div className="row" data-aos="fade-down" data-aos-delay="400">
          <div className="grid-3 disappear"></div>
          <div className="grid-6 mb-7">
            <h2 className=" text-center color-gradient">Muito Obrigado!</h2>
            {/* <h5 className="text-center">Pela Mensagem</h5> */}
            <p className="text-center mt-3">
              Agradecemos o seu contato e ficamos muito felizes em saber do seu
              interesse em nossos serviços. <br /> Esperamos que sua experiência
              conosco supere as suas expectativas.
            </p>
            <Link to="/" className="btn w-100 mt-3 text-center">
              Voltar p/ home
            </Link>
          </div>
          <div className="grid-3 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Thanks;
