import { useState, useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import {
  getFeaturedMovies,
  getTrendingMovies,
  getTrendingTvSeries,
} from "../../service/api";
import Footer from "../../components/footer/Footer";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([] as any);
  const [featuredMovies, setFeaturedMovies] = useState([] as any);
  const [trendingSeries, setTrendingSeries] = useState([] as any);

  const fetchTrendingMovies = async () => {
    const response = await getTrendingMovies();
    setTrendingMovies(response?.results);
    const res1 = await getTrendingTvSeries();
    setTrendingSeries(res1.results);
    const res = await getFeaturedMovies();
    setFeaturedMovies(res);
  };

  useEffect(() => {
    document.title =
      "BlockBust- Watch Full HD Movies Online and Stream Free Movies Online Now";
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <Header />
      {featuredMovies.length > 0 || trendingMovies.length > 0 ? (
        <>
          <div className="movie-items">
            <Carousel title={"Featured"} movies={featuredMovies} />
          </div>

          {/* trending movies */}
          <GridDisplay
            title={"Popular Movies"}
            movies={trendingMovies}
            source={"movie"}
          />

          {/* trending Series */}
          <GridDisplay
            title={"Popular TV Series"}
            movies={trendingSeries}
            source={"tv"}
          />
        </>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
};
