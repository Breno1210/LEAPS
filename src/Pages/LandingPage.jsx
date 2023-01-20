//IMPORT REACT
import React, { /* useState, */ useEffect } from "react";
import Footer from "../Components/footer";
import Header from "../Components/header";
//import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

//IMPORT COMPONENTES
import Hero from "../Components/hero";
import Banner from "../Components/banner";
import Main1 from "../Components/main";
import Main2 from "../Components/main2";
import Invite from "../Components/invite";
import TestCard from "../Components/testCard";

//IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

//IMPORT ICONES
import iconInsta from "../images/img-insta.png";
import iconPost1 from "../images/post1.png";
import iconPost2 from "../images/post2.png";

//IMPORT IMAGENS
import imgTimes from "../images/img-times.png";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      easing: "easy-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const bx = document.querySelector(".bx");
    const menu_mobile = document.querySelector(".menu-mobile");
    const link_mobile = document.querySelectorAll(".link-menu-mobile");

    link_mobile.forEach((item) => {
      item.addEventListener("click", () => {
        menu_mobile.classList.add("showmenu");
      });
    });

    bx.addEventListener("click", () => {
      bx.classList.toggle("activebx");

      menu_mobile.classList.toggle("showmenu");

      console.log("Clicou no bx");
    });
  });

  return (
    <>
      <Header />
      <Hero />
      <section className="container mt-2">
        <div className="row">
          <div className="grid-6" data-aos="fade-down" data-aos-delay="200">
            <h6 className="color-gray mt-2">28 NOV 2022</h6>
            <img src={iconInsta} className="" alt="" />
            <a
              href="https://www.instagram.com/leaps_praca/"
              target={"_blank"}
              className="link-instagram ml-4"
              rel="noreferrer"
            >
              @leaps_praca
            </a>
            <div
              className="flex-center mt-3"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
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
                    <img src={iconPost1} alt="" className="img-post" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={iconPost2} alt="" className="img-post" />
                  </div>
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>

          <div
            className="grid-6 main"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h6 className="color-gray mt-2">ATUALIZADO</h6>
            <img src={imgTimes} className="" alt="" />
            <Main1 />
            <Main2 />
          </div>
        </div>
      </section>

      {/* MaisVistos */}
      <div className="bg-section mt-5">
        <section
          className="container"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h3>Testes</h3>

          <div className="row mt-4">
            <div className="grid-4 p-0">
              <TestCard />
            </div>
            <div className="grid-4 p-0">
              <TestCard />
            </div>
            <div className="grid-4 p-0">
              <TestCard />
            </div>
          </div>
        </section>
      </div>

      <Banner />

      <Invite />

      <Footer />
    </>
  );
};

export default LandingPage;
