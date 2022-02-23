import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Player from "../../components/player/Player";
import {
  getEpisodeBySeason,
  getMovie,
  getSimilarMovies,
  getSimilarTvSeries,
  getTvSeries,
} from "../../service/api";
import {
  Card,
  Button,
  Tooltip,
  Typography,
  Box,
  FormControl,
  Grid,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import Loader from "../../components/loader/Loader";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import DisplayInfo from "../../components/displayInfo/DisplayInfo";

import { GoogleAnalyticsInit } from "../../utils/GoogleAnalyticsInit";

export const StreamPage = () => {
  const { id, source } = useParams();
  const [streamData, setStreamData] = useState(null as any);
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState([] as any);
  const [streamUrl, setStreamUrl] = useState("" as any);
  const [pageTitle, setPageTitle] = useState("" as any);
  const [similarStreamData, setSimilarStreamData] = useState([] as any);
  const [serverUrls, setServerUrls] = useState([] as any);
  const [loader, setLoader] = useState(0);

  const getStreamData = async () => {
    try {
      if (source === "movie") {
        const res = await getMovie(id as number | string);
        const similarMovie = await getSimilarMovies(id as string);
        setStreamData(res);
        setPageTitle(res.title);
        setStreamUrl(res.url);
        setServerUrls(res.url);
        setSimilarStreamData(similarMovie.results);
      }
      if (source === "tv") {
        const res = await getTvSeries(id as number | string);
        const similarTvSeries = await getSimilarTvSeries(id as string);
        setStreamData(res);
        setPageTitle(res.name);
        setServerUrls(res?.seasons[0]?.episodes[0]?.url);
        setStreamUrl(res?.seasons[0]?.episodes[0]?.url[0]);
        setSimilarStreamData(similarTvSeries.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEpisode = async (id: string, season: number) => {
    try {
      const res = await getEpisodeBySeason(id as number | string, season);
      setLoader(1);
      setEpisode(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(Number(event.target.value));
    setLoader(0);
    fetchEpisode(id as string, Number(event.target.value) + 1);
  };

  useEffect(() => {
    GoogleAnalyticsInit();

    if (source === "tv") fetchEpisode(id as string, season + 1);
    getStreamData();
    document.title = pageTitle;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageTitle]);

  return (
    <div>
      <Header />

      {streamData ? (
        <>
          <iframe
            title="ad"
            data-aa="1909560"
            src="//acceptable.a-ads.com/1909560"
            style={{
              width: "100%",
              height: "100%",
              border: "0px",
              padding: "0",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          ></iframe>
          {source === "movie" ? (
            <div className="movie-items" style={{ padding: "2% 8% 2% 8%" }}>
              <h1 style={{ paddingBottom: "2%" }}>
                {streamData.name || streamData.title}
              </h1>
              <Player streamUrl={streamData?.url} />
              <br></br> 
              <p style={{textAlign: "center"}}>If you face problem with player refresh the page or change server</p>  
              {serverUrls.length > 1 && (
                <Box
                className="card"
                style={{ backgroundColor: "rgb(10, 26, 43)" }}
              >
                  <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Card style={{
                        backgroundColor:" rgb(10, 26, 43)", color: "rgb(255, 255, 255)",
                        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        borderRadius: "8px",
                        border:" 1px solid rgb(30, 73, 118)",
                        width:"100%",}}variant="outlined">
                          <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                    {serverUrls?.map((server: any, index: any) => (
                      <Grid item style={{padding:"2rem",}}>
                      <Button
                      onClick={() => setStreamUrl(server)}
                      variant="contained" style={{padding:"1rem",fontSize:"1.3rem",}}>{`Server ${index + 1}`}</Button>
                      </Grid>
                    ))}
                      </Grid>
                </Card>
                </Grid>
              </Box>
              )}
            </div>
          ) : (
            <div className="movie-items" style={{ padding: "2% 8% 2% 8%" }}>
              <h1 style={{ paddingBottom: "2%" }}>
                {streamData.name || streamData.title}
              </h1>
              {streamData && <Player streamUrl={streamUrl} />}
              <br></br>
              <p style={{textAlign: "center"}}>If you face problem with player refresh the page or change server</p> 
              {serverUrls.length > 1 && (
                <Box
                  className="card"
                  style={{ backgroundColor: "rgb(10, 26, 43)" }}
                >
                    <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Card style={{
                          backgroundColor:" rgb(10, 26, 43)", color: "rgb(255, 255, 255)",
                          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                          borderRadius: "8px",
                          border:" 1px solid rgb(30, 73, 118)",
                          width:"100%",}}variant="outlined">
                            <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                      {serverUrls?.map((server: any, index: any) => (
                        <Grid item style={{padding:"2rem",}}>
                        <Button
                        onClick={() => setStreamUrl(server)}
                        variant="contained" style={{padding:"1rem",fontSize:"1.3rem",}}>{`Server ${index + 1}`}</Button>
                        </Grid>
                      ))}
                        </Grid>
                  </Card>
                  </Grid>
                </Box>
              )}

              <br></br>

              {episode ? (
                <Box
                  className="card"
                  sx={{ minWidth: 120, backgroundColor: "rgb(10, 26, 43)" }}
                >
                  <FormControl className="card-body">
                    <Select
                      style={{
                        color: "white",
                        fontSize: "1.4rem",
                        backgroundColor: "rgb(37, 59, 83)",
                      }}
                      value={season.toString()}
                      onChange={handleChange}
                    >
                      {/* Season Iteration */}
                      {streamData?.seasons.map((item: any, index: number) => (
                        <MenuItem
                          key={item.id}
                          value={index}
                          style={{ fontSize: "1.4rem" }}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {loader === 1 ? (
                  <Grid
                    container
                    style={{
                      overflowY: "scroll",
                      position: "relative",
                      height: "250px",
                    }}
                  >
                    {/* Episode Iteration */}
                    {episode?.episodes?.map((ep: any) => (
                      <Grid
                        item
                        xs={12}
                        md={2}
                        style={{
                          maxHeight: "50px",
                          margin: "1.6%",
                          backgroundColor: "rgb(37, 59, 83)",
                          borderRadius: "5px",
                        }}
                      >
                        <ListItemButton>
                       <Tooltip style={{fontSize:"1.7rem",}}  title={<h6 style={{ color: "lightblue" }}> {ep.name}</h6>} >
                          <ListItemText
                         
                            
                            onClick={() => {
                              setStreamUrl(ep?.url[0]);
                              setServerUrls(ep?.url);
                            }}
                          ><Typography   style={{ color: "white", textAlign: "center",  fontSize:"1.3rem" ,  overflow: "hidden",
                          textOverflow:"ellipsis",
                         
                          whiteSpace:"nowrap",}}>
                            {ep.name}
                            </Typography>
                          </ListItemText>
                          </Tooltip>
                        </ListItemButton>
                      </Grid>
                    ))}
                  </Grid>
                 ) : (
                  <div style={{ margin: "0 10% 0 10%" }}>
                    <Skeleton
                      style={{
                        height: "75px",
                        width: "auto",
                      }}
                      animation="pulse"
                      variant="text"
                    />
                    <Skeleton
                      style={{
                        height: "75px",
                        width: "auto",
                      }}
                      animation="pulse"
                      variant="text"
                    />
                    <Skeleton
                      style={{
                        height: "75px",
                        width: "auto",
                      }}
                      animation="pulse"
                      variant="text"
                    />
                  </div>
                )}
                </Box>
              ) : (
                <Loader />
              )}
            </div>
            
          )}
          
      
          <DisplayInfo
            name={streamData.name || streamData.title}
            image={streamData.poster_path}
            description={streamData.overview}
            id={streamData.imdbId}
            release={streamData.first_air_date || streamData.release_date}
          />
        </>
      ) : (
        <Loader />
      )}
      {source === "movie" ? (
        <GridDisplay
          title={"Similar Movies"}
          movies={similarStreamData}
          source={"movie"}
        />
      ) : (
        <GridDisplay
          title={"Similar TV Series"}
          movies={similarStreamData}
          source={"tv"}
        />
      )}

      <Footer />
    </div>
  );
};

