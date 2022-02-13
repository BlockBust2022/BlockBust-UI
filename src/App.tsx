import { HomePage } from "./containers/homepage/Homepage";
import { SearchResult } from "./containers/searchResult/SearchResult";
import { StreamPage } from "./containers/streamPage/StreamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/stream/:id" element={<StreamPage />} />
        <Route path="/stream/:source/:id" element={<StreamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
