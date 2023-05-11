import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../components/ComicCard";

const Comics = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-end-marvel--p2d7k4xwpzzq.code.run/comics"
        );
        setData(response.data);
        console.log(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return IsLoading ? (
    <p>Page is Loading</p>
  ) : (
    <div className="all">
      {data.results.map((comic) => {
        return <ComicCard key={comic._id} comicData={comic} />;
      })}
    </div>
  );
};
export default Comics;
