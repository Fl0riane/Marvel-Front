import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./pagination.css";

const Pagination = ({ handleClickMinus, handleClickPlus, page }) => {
  return (
    <span className="pagin">
      <button onClick={handleClickPlus}>
        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
      </button>

      <p>page {page} </p>

      <button onClick={handleClickMinus}>
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </button>
    </span>
  );
};
export default Pagination;
