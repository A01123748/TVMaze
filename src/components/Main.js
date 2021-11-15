import "../App.css";
import React, { useState, useMemo } from "react";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";
import useSearchMovies from "../hooks/useSearchMovies";
import useDebounce from "../hooks/useDebounce";

function Main() {
  const [text, setText] = useState("");
  const debouncedSearchTerm = useDebounce(text, 500);
  const data = useSearchMovies(debouncedSearchTerm);
  const [rating, setRating] = useState(0);
  const dispayedData = useMemo(
    () =>
      Object.entries(data).length > 0
        ? data?.filter((movie) => movie.rating.average >= rating * 2)
        : data,
    [data, rating]
  );
  console.log("Rendering...");
  return (
    <div className="App">
      <div className="App-header">
        <SearchBar
          text={text}
          setText={setText}
          rating={rating}
          setRating={setRating}
        />
      </div>
      <div className="Main">
        <MoviesList results={dispayedData} rating={rating} />
      </div>
    </div>
  );
}

export default React.memo(Main);
