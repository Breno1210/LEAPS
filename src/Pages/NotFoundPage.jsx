//IMPORT COMPONENTS
import Footer from "../Components/footer";
import Header from "../Components/header";

//IMPORT SVGS
import iconLogo from "../svg/logo-LEAPS.svg";

//IMPORT REACT
import { Link } from "react-router-dom";
import { useEffect } from "react";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
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
          <div className="grid-4 disappear"></div>
          <div className="grid-4 mb-7">
            <h1 className="h0 text-center color-gradient">404</h1>
            <h5 className="text-center">Página não encontrada!</h5>
            <p className="text-center mt-1">
              A página que você tá procurando não existe ou foi removida. Clique
              para voltar para o site.
            </p>

            <Link href="/" className="btn w-100 mt-3 text-center">
              Voltar p/ home
            </Link>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
