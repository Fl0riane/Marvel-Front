import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ComicCard from "../components/ComicCard";

const CharactComics = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-end-marvel--p2d7k4xwpzzq.code.run/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return IsLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="carroussel">
      {data.comics.map((comic) => {
        return (
          <div key={comic._id}>
            <ComicCard comicData={comic} />
          </div>
        );
      })}
    </section>
  );
};

export default CharactComics;
