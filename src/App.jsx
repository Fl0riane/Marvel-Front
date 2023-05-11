import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Cookies from "js-cookie";

/*-----------Components-------------*/
import Header from "./components/Header.jsx";

/*-----------Pages-------------*/
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Comic from "./pages/Comic";
import CharactComics from "./pages/CharatComics";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faArrowUp,
  faArrowDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faArrowUp, faArrowDown, faStar);

const App = () => {
  const [research, setResearch] = useState("");
  const [sort, setSort] = useState("0");
  const [limit, setLimit] = useState("100");
  const [skip, setSkip] = useState("0");

  return (
    <div className="container">
      <Router>
        <Header
          research={research}
          setResearch={setResearch}
          limit={limit}
          setLimit={setLimit}
          sort={sort}
          setSort={setSort}
          skip={skip}
          setSkip={setSkip}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={
              <Characters research={research} limit={limit} sort={sort} />
            }
          />
          <Route path="/character/:id" element={<Character />} />
          <Route
            path="/comics"
            element={<Comics research={research} limit={limit} sort={sort} />}
          />
          <Route path="/comic/:id" element={<Comic />}></Route>
          <Route path="/comics/:id" element={<CharactComics />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
