import { Link } from "react-router-dom";
import "./character.css";
import img from "../../assets/img/fack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = ({ data }) => {
  return (
    <div className="all">
      {data.map((character) => (
        <CharacterCardData key={character._id} character={character} />
      ))}
    </div>
  );
};

const CharacterCardData = ({ character }) => {
  return (
    <div>
      <Link to={`/character/${character._id}`} key={character._id}>
        <article className="littlePic" key={character._id}>
          {character.thumbnail ? (
            <img
              src={
                character.thumbnail.path +
                "/" +
                "portrait_xlarge" +
                "." +
                character.thumbnail.extension
              }
              alt={character.name}
            />
          ) : (
            <img src={img} alt="img" />
          )}
          <span>
            <h2>{character.name}</h2>
            <button>
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </button>
          </span>
        </article>
      </Link>
    </div>
  );
};

export default CharacterCard;
