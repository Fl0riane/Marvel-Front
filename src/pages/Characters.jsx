import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

const Characters = ({ research, limit, skip, sort }) => {
  const [data, setData] = useState("");
  const [IsLoading, setIsLoading] = useState(true);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-end-marvel--p2d7k4xwpzzq.code.run/characters?$name=${research}&limit=${limit}&skip=${skip}&sort=${sort}`
        );
        setData(response.data);
        console.log(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skip, limit, sort, research]);

  return IsLoading ? (
    <p>Page is Loading</p>
  ) : (
    <section>
      <div className="all">
        {data.results.map((character) => {
          return (
            <CharacterCard key={character._id} characterData={character} />
          );
        })}
      </div>
    </section>
  );
};
export default Characters;
