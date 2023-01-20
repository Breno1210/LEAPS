//COMPONENT DO CARD DOS TESTES

//SVG e IMG
import { Link } from "react-router-dom";
import imgCard from "../images/img-card-test.jpg"

const TestCard = () => {
  return (
    <div className="card">
      <div className="thumb hidden">
        <Link to={"/description"}>
          <img src={imgCard} alt="" />
        </Link>
      </div>
      <div className="mt-2 px-2">
        <h6 className="uppercase color-gradient bold">
          Tecnologia
        </h6>

        <h4 className="overflow-breakword">Lorem Ipsum is simply dummy text of </h4>
        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
        <div className="flex-space my-2">
          <a
            href="https://www.instagram.com/leaps_praca/"
            target={"_blank"}
            className="link-instagram color-gray-dark"
            rel="noreferrer"
          >
            @Instagram
          </a>
        </div>
        <div className="my-2">
          <a
            href={"'"}
            className="link color-gradient bold"
          >
            Ler mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
