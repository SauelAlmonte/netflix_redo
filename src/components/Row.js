import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold :text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative" 
            id={"slider"}
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
