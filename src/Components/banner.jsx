import imgBanner from "../images/img-banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="container mb-9 mt-9">
      <div
        className="img-banner hidden"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <img src={imgBanner} alt="" />
      </div>
      <div className="row mt-3" data-aos="fade-down" data-aos-delay="600">
        <h3 className="text-center">
          Curiosidades sobre a Avaliação Psicológica
        </h3>
        <p className="mt-2 text-center">
          Você sabia que a maioria das pessoas passa por uma avaliação
          psicológica por pelo menos uma vez na vida? Clique e entenda um pouco
          mais sobre esse processo tão presente no nosso cotidiano.
        </p>
        <div className="my-3 flex-center">
          <Link to="/tests" className="link color-gradient bold">
            Ler mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
