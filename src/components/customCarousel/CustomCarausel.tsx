import React from "react";

const CustomCarausel = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <div className="sliderv3 movie-items">
      <div className="container">
        <div className="row">
          <div className="slick-multiItemSlider">
            {/* Iterrate this  */}
            {props.movies.map((movie: any) => (
              <div className="movie-item">
                {/* onclick="location.href='#';"> */}
                <div className="mv-img">
                  <a>
                    <img
                      src={`${baseUrlPoster}/${movie.poster_path}`}
                      alt={movie.title}
                      width="285"
                      height="437"
                    />
                  </a>
                </div>
                <div className="title-in">
                  <div className="cate"></div>
                  <h6>
                    <a>{movie.title}</a>
                  </h6>
                  <p>
                    <a>1995</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarausel;
