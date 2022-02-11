import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import Footer from "../../components/footer/Footer";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import { getSearch } from "../../service/api";
import { makeStyles } from "@mui/styles";
import NotFound from "../../components/notFound/NotFound";
import queryString from "query-string";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      fontSize: "15px",
      padding: "45%",
    },
  },
}));

export const SearchResult = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const query = queryString.parse(loc.search);
  const keyword = query.query;
  const page = query.page;
  const [search, setSearch] = useState([] as any);
  const [pg, setPg] = useState(Number(page));
  const [totalPages, setTotalPages] = useState(1);

  const classes = useStyles();

  const fetchSerachData = async (p: number) => {
    try {
      const res = await getSearch(keyword as string, p);
      setSearch(res?.results);
      setTotalPages(res?.total_pages);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSerachData(pg);
    document.title = "Results for " + keyword;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, page]);

  return (
    <div>
      <Header />
      {search.length > 0 ? (
        <div>
          {search.toString() === "Not Found" ? (
            <NotFound />
          ) : (
            <>
              <div style={{ paddingTop: "2%" }} className="movie-items">
                <GridDisplay
                  title={`Search Results for ${keyword}`}
                  movies={search}
                />
              </div>
              <Stack style={{ backgroundColor: "#020d18" }}>
                <Pagination
                  style={{ margin: "auto", display: "block" }}
                  count={totalPages}
                  defaultPage={pg}
                  size="large"
                  color="primary"
                  classes={{ ul: classes.ul }}
                  onChange={(event, p) => {
                    setPg(p);
                    navigate(`/search?query=${keyword}&page=${p}`);
                  }}
                />
              </Stack>
            </>
          )}
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
};
