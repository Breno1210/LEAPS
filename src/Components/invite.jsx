//IMPORT SVG
import fignu5 from "../svg/fignu5.svg";

//IMPORT SVGINJECT
import SVGInject from "@iconfu/svg-inject";

//IMPORT REACT
import { Link } from "react-router-dom";

const Invite = () => {
  return (
    <>
      <div className="bg-invite relative flex-center py-9">
        <img
          src={fignu5}
          className="width-auto svg-bg-invite"
          alt=""
          onLoad={(e) => {
            SVGInject(e.target);
          }}
        />

        <section className="container">
          <div className="flex-item-1 flex-center flex-column mx-2">
            <div data-aos="fade-down" data-aos-delay="200">
              <h5 className="mb-1 mt-2 uppercase text-center color-gradient bold">
                LEAPS
              </h5>
              <h2 className="mb-1 text-center">Onde estamos?</h2>
            </div>

            <div className="" data-aos="fade-down" data-aos-delay="400">
              <div className="mt-4">
                <h6 className="mt-2 flex-start-row">
                  Endereço:
                  <p className="ml-1">
                    Sala 1101 - Prédio 3 (PIC), Rua Cláudio Manoel, n° 1185
                  </p>
                </h6>
                <h6 className="mt-2 flex-start-row">
                  E-mail:
                  <p className="ml-1">leaps.pucpraca@gmail.com</p>
                </h6>
                <h6 className="mt-2 flex-start-row">
                  Instagram:
                  <a
                    href="https://www.instagram.com/leaps_praca/"
                    target={"_blank"}
                    className=" ml-2"
                    rel="noreferrer"
                  >
                    @leaps_praca
                  </a>
                </h6>
              </div>
            </div>
            <div className="my-2" data-aos="fade-down" data-aos-delay="600">
              <Link to="/about" href="" className="btn mt-2">
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Invite;
