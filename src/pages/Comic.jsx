import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import img from "../assets/img/fack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comic = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // console.log({ id });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-end-marvel--p2d7k4xwpzzq.code.run/comic/${id}`
        );
        setData(response.data);
        console.log(response.data);
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
    <section className="bigPic">
      <article key={data._id}>
        <span>
          <button>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </button>
          {data.thumbnail.path ? (
            <img
              src={
                data.thumbnail.path +
                "/" +
                "standard_fantastic" +
                "." +
                data.thumbnail.extension
              }
              alt={data.title}
            />
          ) : (
            <img src={img} alt="img" />
          )}
        </span>
      </article>
      <div>
        <h1>{data.title}</h1>
        {data.description ? (
          <h4>{data.description}</h4>
        ) : (
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis esse ex, tempora commodi non sit nobis quibusdam.
            Voluptatum eos fugit in natus, qui expedita aperiam iste autem,
            perspiciatis eaque quam.
          </h4>
        )}{" "}
      </div>
    </section>
  );
};

export default Comic;
