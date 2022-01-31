import { HomePage } from "./containers/homepage/Homepage";
import { SearchResult } from "./containers/searchResult/SearchResult";
import { StreamPage } from "./containers/streamPage/StreamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import  Reactga  from "react-ga";
function App() {
  
  
  useEffect(() => {
    Reactga.initialize("G-V186B0X8K4");
    Reactga.pageview(window.location.pathname + window.location.search);
    console.log("Google Analytics loaded: ", Reactga.ga());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword/page=:page" element={<SearchResult />} />
        <Route path="/stream/:id" element={<StreamPage />} />
        <Route path="/stream/:source/:id" element={<StreamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
