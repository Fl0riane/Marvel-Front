import "./comic.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ComicCard = ({ comicData }) => {
  console.log(comicData);
  return (
    <Link to={`/comic/${comicData._id}`} key={comicData._id}>
      <article className="littlePic">
        <img
          src={
            comicData.thumbnail.path +
            "/" +
            "portrait_xlarge" +
            "." +
            comicData.thumbnail.extension
          }
          alt={comicData.title}
        />

        <span>
          <h2>{comicData.title}</h2>
          <button>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </button>
        </span>
      </article>
    </Link>
  );
};

export default ComicCard;
