import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-end-marvel--p2d7k4xwpzzq.code.run/characters"
        );
        setData(response.data);
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
    <div>
      {data.characters.map(() => {
        return (
          <article key={data.characters._id}>
            <div>{data.characters.name}</div>
          </article>
        );
      })}
    </div>
  );
};
export default Characters;
