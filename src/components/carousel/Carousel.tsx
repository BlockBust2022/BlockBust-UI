import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResultsEntity } from "../../interface/getTrendingMoviesInterface";
import { Link } from "react-router-dom";
import { ImageBaseUrl } from "../../constant/constant";
import "./style.css";

type CarouselProps = {
  movies: ResultsEntity[];
  title?: string;
};

const Carousel = ({ movies, title }: CarouselProps) => {

  var settings = {
    dots: true,   
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <div style={{ padding: "2% 8% 8% 8%", overflow: 'hidden', }}>
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
                image={`${ImageBaseUrl}/${movie.poster_path}`}
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
