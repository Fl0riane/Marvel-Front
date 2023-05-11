import { Link } from "react-router-dom";
import "./character.css";
import img from "../../assets/img/fack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = ({ characterData }) => {
  console.log(characterData);
  return (
    <Link to={`/character/${characterData._id}`} key={characterData._id}>
      <article className="littlePic" key={characterData._id}>
        {characterData.thumbnail ? (
          <img
            src={
              characterData.thumbnail.path +
              "/" +
              "portrait_xlarge" +
              "." +
              characterData.thumbnail.extension
            }
            alt={characterData.name}
          />
        ) : (
          <img src={img} alt="img" />
        )}
        <span>
          <h2>{characterData.name}</h2>{" "}
          <button>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </button>
        </span>
      </article>
    </Link>
  );
};

export default CharacterCard;
