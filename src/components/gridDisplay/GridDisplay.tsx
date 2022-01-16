import React from "react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowSharp';
import { Link } from "react-router-dom";
import "./style.css";
import { Typography } from "@mui/material";

const GridDisplay = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <div className="page-single">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <h4 className="sb-title">{props.title}</h4>

            <div className="flex-wrap-movielist">
              {/* Iterrate this  */}
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
                      src={`${baseUrlPoster}/${movie.poster_path}`}
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

                      {/* <Typography style={{ marginTop: "-10px" }} variant="h6">
                        {movie.release_date?.split("-")[0] ||
                          movie.first_air_date?.split("-")[0]}
                      </Typography> */}
                    </div>
                  </div>
                </Link>
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
