import { ImageBaseUrl } from "../../constant/constant";
import "./style.css";
import { Link } from "react-router-dom";
import { ResultsEntity } from "../../interface/searchInterface";

const Row = (props: {
  movies: ResultsEntity[];
  handleMovieData: (arg0: any) => void;
}) => {
  return (
    <div className="row">
      <div className="row_posters">
        {props.movies.map((movie: ResultsEntity) => (
          <div key={movie.id || "0"}>
            <Link
              to={{
                pathname: `/stream/${movie.id}`,
              }}
            >
              <img
                onClick={() => props.handleMovieData(movie)}
                style={{ width: "100px", height: "300px" }}
                key={movie.id}
                src={`${ImageBaseUrl}${movie.poster_path}`}
                alt={"alternate img"}
              />
            </Link>
            <h5>{movie.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
