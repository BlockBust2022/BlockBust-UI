import React from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowSharp";
import { Link } from "react-router-dom";
import "./style.css";
import { ImageBaseUrl } from "../../constant/constant";

const GridDisplay = (props: any) => {
  return (
    <div className="page-single">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <h4 className="sb-title">{props.title}</h4>

            <div className="flex-wrap-movielist">
              {props.movies.map((movie: any) => (
                <Link
                  key={movie.id}
                  to={{
                    pathname: `/stream/${props.source || movie.media_type}/${
                      movie.id
                    }`,
                  }}
                >
                  <div className="movie-item-style-1">
                    <img
                      src={`${ImageBaseUrl}/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="hvr-inner">
                      <PlayArrowRoundedIcon fontSize="large" />{" "}
                    </div>
                    <div className="mv-item-infor">
                      <h6>
                        <a href="/">{movie.title || movie.name}</a>
                      </h6>
                      <p>
                        {movie.release_date?.split("-")[0] ||
                          movie.first_air_date?.split("-")[0]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="row mb-5 mb-xl-8 g-5 g-xl-8 " style={{flexFlow:"wrap"}}>
            {props.movies.map((movie: any) => (
                
                  <div className="col-6 mobile">
                  <Link
                    key={movie.id}
                    to={{
                      pathname: `/stream/${props.source || movie.media_type}/${
                        movie.id
                      }`,
                    }}
                  >
                    <div className="movie-item-style-2">
                      <img
                        src={`${ImageBaseUrl}/${movie.poster_path}`}
                        alt={movie.title}
                        width="154 " height="231 "
                      />
                      
                      <div className="mv-item-infor">
                        <h6>
                          <a href="/">{movie.title || movie.name}</a>
                        </h6>
                        <p>
                          {movie.release_date?.split("-")[0] ||
                            movie.first_air_date?.split("-")[0]}
                        </p>
                      </div>
                    </div>

                    </Link>
                  </div>

              ))}
                  

              </div>


          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="searh-form">
                <h4 className="sb-title">Ads</h4>
                <div className="ads">
                  <iframe
                    title="ad"
                    data-aa="1889116"
                    src="//ad.a-ads.com/1889116?size=300x250"
                    style={{
                      width: "300px",
                      height: "250px",
                      border: "0px",
                      padding: "0",
                      overflow: "hidden",
                      backgroundColor: "transparent",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridDisplay;
