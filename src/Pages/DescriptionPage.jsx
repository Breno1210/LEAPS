//IMPORT REACT
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

//IMPORT AXIOS
import axios from "axios";

//Components
import Footer from "../Components/footer";
import Header from "../Components/header";

//Images jpg
import bgDescription from "../images/bg-description.jpg";

const Description = () => {
  const [user, setUser] = useState("");
  const [test, setTest] = useState("");
  const { id } = useParams();
  const now = new Date();
  const end_date =
    Date.parse(
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 30)
    ) / 1000;

  const getTest = async () => {
    const url = `http://localhost:5000/test/list`;

    let tests = await axios.get(url);

    tests.data.data.forEach(function (teste) {
      if (teste.id === id) {
        setTest(teste);
      }
    });
  };

  const getUser = async () => {
    const token = sessionStorage.getItem("token");

    const url = `http://localhost:5000/user/retrieve/${token}`;

    let user = await axios.get(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    setUser(user.data.data);
  };

  const createLoan = async () => {
    const url = `http://localhost:5000/loan/create`;

    const data = {
      end_date: end_date,
      test: test.id,
      user: user.id,
    };
    console.log(data);

    const token = sessionStorage.getItem("token");

    await axios.post(url, data, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    toast.success("Empréstimo criado com sucesso!", {
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
    getTest();
    getUser();
    AOS.init({
      easing: "easy-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="hidden">
        <div className="">
          <img src={bgDescription} className="bg-description " alt="" />
        </div>
        <div className="container relative mt--110">
          <div className="row mt-3">
            <div
              className="flex-center"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Link href="#" className="btn color-primary uppercase mb-3">
                Post
              </Link>
            </div>

            <div data-aos="fade-down" data-aos-delay="400">
              <h3 className="text-center">Lorem Ipsum is simply dummy text of </h3>
              <p className="mt-1 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
            </div>

            <div
              className="flex-center mt-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <p>
                Faixa Etária: 18 - 55
              </p>
            </div>

            <div
              className="row description mt-12"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <h4 className="text-center mb-4">Lorem Ipsum is simply dummy text of </h4>

              <div className="grid-3"></div>
              <p className="grid-6">  adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.

<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, p ellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. 
<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. 
<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. 
<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra.  </p>
              <div className="grid-3"></div>
            </div>
            <div className="row flex-center">
              <Link
                href="#"
                className="btn color-primary uppercase mt-5 flex-center"
                onClick={createLoan}
              >
                Realizar Empréstimo
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Description;
