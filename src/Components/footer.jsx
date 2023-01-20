//IMPORT DOS ICONES
import logo from "../svg/logo-LEAPS.svg";
import iconFacebook from "../svg/icon-facebook.svg";
import iconInstagram from "../svg/icon-instagram.svg";
import iconYoutube from "../svg/icon-youtube.svg";
import iconTwitter from "../svg/icon-twitter.svg";

//IMPORT DAS IMAGENS
import imgBanner from "../images/img-footer.png";

//IMPORTS REACT
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-section bt-black">
        <section className="container pb-0 ">
          <div data-aos="fade-down" data-aos-delay="200">
            <div className="row flex-center">
              <img src={logo} className="logo-login mb-2" alt="" />
            </div>
            <h3 className="text-center mb-7 color-gradient">LEAPS</h3>
          </div>

          <h5 className="text-center" data-aos="fade-down" data-aos-delay="400">
            Horários de funcionamento
          </h5>

          <div className="row pb-3 bb-black ">
            <div className="grid-6" data-aos="fade-down" data-aos-delay="600">
              <h5 className="color-gray text-center">Graduação</h5>
              <h6 className="mt-2 flex-start-row">
                Terça-feira: <p className="ml-1">11:00 - 19:00</p>
              </h6>
              <h6 className="mt-2 flex-start-row">
                Quarta-feira:
                <p className="ml-1">10:30 - 12:30 & 14:00 - 19:00</p>
              </h6>
              <h6 className="mt-2 flex-start-row">
                Quinta-feira: <p className="ml-1">11:00 - 19:00</p>
              </h6>
              <h6 className="mt-2 flex-start-row">
                Sexta-feira:
                <p className="ml-1">09:30 - 11:30 & 13:00 - 14:30</p>
              </h6>
            </div>

            <div className="grid-6" data-aos="fade-down" data-aos-delay="600">
              <h5 className="color-gray text-center">Pós-graduação</h5>
              <h6 className="mt-2 flex-start-row">
                Terça-feira: <p className="ml-1">15:00 - 20:00</p>
              </h6>
              <h6 className="mt-2 flex-start-row">
                Sexta-feira: <p className="ml-1">15:00 - 20:00</p>
              </h6>
            </div>
          </div>

          <div className="row pb-3 bb-black ">
            <div className="grid-6" data-aos="fade-down" data-aos-delay="800">
              <h4 className="mb-2">Quer ser um membro LEAPS?</h4>
              <p>
                Cadastre-se com seu e-mail aqui! <br />
                Venha se tornar um membro da LEAPS.
              </p>
              <div className="flex-start-row mt-2">
                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Digite seu e-mail aqui"
                />
                <Link to="/contact">
                  <button className="btn ml-2">Cadastrar</button>
                </Link>
              </div>
            </div>

            <div className="grid-6" data-aos="fade-down" data-aos-delay="800">
              <img src={imgBanner} className="" alt="" />
              <p className="mt-3 text-center">
                O Laboratório de Estudos em Avaliação Psicológica (LEAPS) foi
                criado pela faculdade de psicologia (Fapsi) da PUC Minas - Praça
                da Liberdade, para atender e oferecer suporte aos alunos da
                unidade que buscam conhecimento sobre os temas da Avaliação
                Psicológica.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="grid-9">
              <p>2022 | Todos os direitos reservados a PUC - MINAS. </p>
            </div>

            <div className="grid-3 flex-end-row icons-footer">
              <a
                href="https://www.instagram.com/leaps_praca/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconFacebook} className="icon-s" alt="" />
              </a>
              <a
                href="https://www.instagram.com/leaps_praca/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconInstagram} className="icon-s ml-2" alt="" />
              </a>
              <a
                href="https://www.instagram.com/leaps_praca/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconYoutube} className="icon-s ml-2" alt="" />
              </a>
              <a
                href="https://www.instagram.com/leaps_praca/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconTwitter} className="icon-s ml-2" alt="" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
