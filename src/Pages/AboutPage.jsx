//IMPORT REACT
import React, { useEffect } from "react";

//IMPORT COMPONENTS
import Footer from "../Components/footer";
import Header from "../Components/header";

//IMPORT IMAGENS
import iconLogo from "../svg/logo-LEAPS.svg";
import bgSobre from "../images/bg-sobre.jpg";
import img1 from "../images/aboutImages/img1.jpg";
import img2 from "../images/aboutImages/img2.jpg";
import img3 from "../images/aboutImages/img3.jpg";
import img4 from "../images/aboutImages/img4.jpg";
import img5 from "../images/aboutImages/img5.jpg";
import img6 from "../images/aboutImages/img6.jpg";
import img7 from "../images/aboutImages/img7.jpg";

//IMPORT SVGINJECT E AOS
import SVGInject from "@iconfu/svg-inject";
import AOS from "aos";
import "aos/dist/aos.css";

//IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

const AboutPage = () => {
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
      <img
        src={bgSobre}
        className="bg-sobre mt--110"
        alt=""
        onLoad={(e) => {
          SVGInject(e.target);
        }}
      />
      <section className="container">
        <div data-aos="fade-down" data-aos-delay="200">
          <div className="row flex-center mt-7">
            <img src={iconLogo} className="logo-login mb-2" alt="" />
          </div>

          <h3 className="text-center uppercase bold">Sobre o LEAPS</h3>

          <div className="row">
            <p className="mt-4 text-center">
              O Laboratório de Estudos em Avaliação Psicológica (LEAPS) foi
              criado pela faculdade de psicologia (Fapsi) da PUC Minas - Praça
              da Liberdade, para atender e oferecer suporte aos alunos da
              unidade que buscam conhecimento sobre os temas da Avaliação
              Psicológica.
            </p>
            <h5 className="bold mt-4 text-center">Objetivos</h5>
            <div className="grid-6 -mt">
              <p>
                <br />
                <span>*</span> Fornecer suporte às disciplinas e estágios que
                incluam a avaliação psicológica;
                <br />
                <span>*</span> Possibilitar aos alunos e professores
                conhecimento e treino das técnicas de avaliação psicológica;
              </p>
            </div>

            <div className="grid-6 -mt">
              <p>
                <br />
                <span>*</span> Divulgar informações sobre eventos científicos;
                <br />
                <span>*</span> Promover debates e palestras;
                <br />
                <span>*</span> Desenvolver pesquisas;
              </p>
            </div>
          </div>
        </div>

        <div
          className="container flex-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src={img1} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img3} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img4} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img5} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img6} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img7} alt="" className="img-about" />
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
