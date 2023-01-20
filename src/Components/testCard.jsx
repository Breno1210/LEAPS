//COMPONENT DO CARD DOS TESTES
const TestCard = ({ content }) => {
  return (
    <div className="">
      <div className="thumb hidden">
        <a href={`/description/${content.id}`}>
          <img src={content.photo} alt="" />
        </a>
      </div>
      <div className="mt-2 px-2">
        <h6 className="uppercase color-gradient bold">
          {content.what_it_evaluates}
        </h6>

        <h4 className="overflow-breakword">{content.name}</h4>
        <p className="mt-1">{content.description}</p>
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
            href={`/description/${content.id}`}
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
