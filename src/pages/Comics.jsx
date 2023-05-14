import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../components/ComicCard";
import Pagination from "../components/Pagination/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [research, setResearch] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (event) => {
    setResearch(event.target.value);
  };
  const handleClickPlus = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleClickMinus = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 100;
        const skip = (page - 1) * limit;
        const response = await axios.get(
          `https://site--back-end-marvel--p2d7k4xwpzzq.code.run/comics?limit=${limit}&skip=${skip}&title=${research}&sort=${sort}`
        );
        setData(response.data.results);

        console.log(response.data.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [research, page]);

  return IsLoading ? (
    <p>Page is Loading</p>
  ) : (
    <section>
      <div className="research">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          name="header input"
          placeholder="Recherche tes comics préférés"
          onChange={handleSearch}
        />
      </div>
      <div className="sort">
        <h5>trier</h5>
        <button
          onClick={() => {
            setSort("A-Z");
          }}
        >
          A-Z
        </button>
        <button
          onClick={() => {
            setSort("Z-A");
          }}
        >
          Z-A
        </button>
      </div>
      <div>
        <ComicCard data={data} setSort={setSort} />

        <Pagination
          handleClickPlus={handleClickPlus}
          handleClickMinus={handleClickMinus}
          page={page}
        />
      </div>
    </section>
  );
};
export default Comics;
