import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResultsEntity } from "../../interface/getTrendingMoviesInterface";
import { Link } from "react-router-dom";
import "./style.css";
//create carousel component

type CarouselProps = {
  movies: ResultsEntity[];
  title?: string;
};

const Carousel = ({ movies, title }: CarouselProps) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w342/";
  var settings = {
    dots: true,   
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ padding: "8%", overflow: 'hidden', }}>
      <Slider {...settings}>
        {movies.map((movie: any) => (
          <Link
            to={{
              pathname: `/stream/${movie.source}/${movie.id}`,
            }}
            key={movie.id}
          >
            <Card
              key={movie.id}
              style={{ backgroundColor: "#020d18", boxShadow: "none" }}
            >
              <CardMedia
                style={{ height: "400px", width: "270px", margin: "auto" }}
                component="img"
                image={`${baseUrlPoster}/${movie.poster_path}`}
              />
            </Card>
            <div className="mv-item-infor">
              <h6>
                <a href="/">{movie.title || movie.name}</a>
              </h6>
              <p>
                {movie.release_date?.split("-")[0] ||
                  movie.first_air_date?.split("-")[0]}
              </p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
