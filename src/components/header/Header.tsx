import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

const Header = (props: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const handleGotoSearch = (searchKeyword: string) => {
    searchKeyword.length > 0 &&
      navigate(`/search?query=${searchKeyword}&page=1`);
  };
  console.log(searchKeyword);
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <Link
              to={{
                pathname: `/`,
              }}
            >
              <img className="logo" src={logo} alt="" width="119" height="58" />
            </Link>
          </div>
        </nav>

        <div className="top-search" style={{ margin: "15px" }}>
          <form style={{ width: "100%", display: "flex" }} onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search for a movie or a TV Show. "
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            {/* <Button type="submit" size="large" onClick={() => handleGotoSearch(searchKeyword)}>
              Search
            </Button> */}
            <IconButton
              type="submit"
              aria-label="search"
              size="large"
              onClick={() => handleGotoSearch(searchKeyword)}
            >
              <SearchIcon style={{ color: "white", transform: "scale(1.8)" }} />
            </IconButton>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
