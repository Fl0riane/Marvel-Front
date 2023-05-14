import "./comic.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicCard = ({ data }) => {
  return (
    <div className="all">
      {data.map((comic) => (
        <ComicCardData key={comic._id} comic={comic} />
      ))}
    </div>
  );
};

const ComicCardData = ({ comic }) => {
  return (
    <Link to={`/comic/${comic._id}`} key={comic._id}>
      <article className="littlePic">
        <img
          src={
            comic.thumbnail.path +
            "/" +
            "portrait_xlarge" +
            "." +
            comic.thumbnail.extension
          }
          alt={comic.title}
        />

        <span>
          <h2>{comic.title}</h2>
          <button>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </button>
        </span>
      </article>
    </Link>
  );
};

export default ComicCard;
