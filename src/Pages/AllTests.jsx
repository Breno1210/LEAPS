//IMPORT COMPONENTS
import Footer from "../Components/footer";
import Header from "../Components/header";

import TestCard from "../Components/testCard";

//IMPORT AXIOS
import axios from "axios";
//IMPORT REACT
import { useEffect, useState } from "react";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const AllTests = () => {
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
          <h6 className="text-center color-gradient-3 bold uppercase">
            6 Resultados
          </h6>
          <h3 className="text-center ml-2 mb-4">Lista de todos os Testes</h3>
        </div>

        <div className="row" data-aos="fade-down" data-aos-delay="400">
          <div className="grid-4 p-0">
            <TestCard />
          </div>
          <div className="grid-4 p-0">
            <TestCard />
          </div>
          <div className="grid-4 p-0">
            <TestCard />
          </div>
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
      <Footer />
    </>
  );
};

export default AllTests;
