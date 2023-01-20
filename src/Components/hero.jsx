//IMPORT SVGS
import bghero from "../svg/bg-hero.svg";

//IMPORT IMGS
import imgBrain from "../images/brain.png";

//IMPORT SVGINJECT
import SVGInject from "@iconfu/svg-inject";

//IMPORT REACT
import { Link } from "react-router-dom";

//IMPORT TILT PARALLAX
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <>
      <section className="">
        <img
          src={bghero}
          className="bg-hero m-bghero"
          alt=""
          onLoad={(e) => {
            SVGInject(e.target);
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div
          className="container relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="row mt-9">
            <div className="grid-6">
              <h1 className="h0">
                LEAPS<span>.</span>
              </h1>
              <p className="mt-1 ml-1 p1">
                Laboratório de Estudos em Avaliação Psicológica
              </p>
              <Link
                to="/about"
                href="#"
                className="btn saiba text-center mt-4 ml-1"
              >
                Saiba Mais
              </Link>
            </div>
            <div className="grid-6">
              <Tilt>
                <img
                  className="img-hero"
                  src={imgBrain}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="600"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
