import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

/*-----------Components-------------*/
import Header from "./components/Header.jsx";
import Modal from "./components/Modal/modal";
import Footer from "./components/Footer";
/*-----------Pages-------------*/
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Comic from "./pages/Comic";
import CharactComics from "./pages/CharatComics";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faArrowUp,
  faArrowDown,
  faStar,
  faAngleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faArrowUp,
  faArrowDown,
  faStar,
  faAngleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCircleXmark,
  faXmark
);

const App = () => {
  const [token, setToken] = useState(Cookies.get("MarvelToken") || null);
  const [research, setResearch] = useState("");
  const [sort, setSort] = useState();
  const [skip, setSkip] = useState();
  const [tab, setTab] = useState([]);
  const [counter, setCounter] = useState(1);
  const [visible, setVisible] = useState(false);

  const addFavorite = (item) => {
    const newTab = [...tab];
    const exist = newTab.find((elem) => elem.id === item.id);

    if (exist) {
      exist.item--;
      setTab(newTab);
    } else {
      newTab.push({ ...item });
      setTab(newTab);
    }
  };

  const handleUserData = (userData) => {
    if (userData && userData.token) {
      const { token } = userData;
      setToken(token);

      Cookies.set("marvel-Token", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("marvel-Token");
    }
  };

  return (
    <div className="container">
      <Router>
        <Header
          token={token}
          handleUserData={handleUserData}
          research={research}
          setResearch={setResearch}
          sort={sort}
          yarn
          setSort={setSort}
          skip={skip}
          setSkip={setSkip}
          visible={visible}
          setVisible={setVisible}
        />

        <Routes>
          <Route path="/" element={<Home research={research} />} />

          <Route
            path="/characters"
            element={
              <Characters
                research={research}
                setResearch={setResearch}
                sort={sort}
                addFavorite={addFavorite}
                setcounter={setCounter}
                counter={counter}
              />
            }
          />
          <Route
            path="/character/:id"
            element={<Character addFavorite={addFavorite} />}
          />
          <Route
            path="/comics"
            element={
              <Comics
                research={research}
                sort={sort}
                addFavorite={addFavorite}
                setcounter={setCounter}
                counter={counter}
              />
            }
          />
          <Route
            path="/comic/:id"
            element={<Comic addFavorite={addFavorite} />}
          ></Route>
          <Route
            path="/comics/:id"
            element={<CharactComics addFavorite={addFavorite} />}
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites addFavorite={addFavorite} tab={tab} />}
          />

          <Route
            path="/user/signup"
            element={
              <SignUp
                handleUserData={handleUserData}
                visible={visible}
                setVisible={setVisible}
              />
            }
          />

          <Route
            path="/user/login"
            element={
              <Login
                handleUserData={handleUserData}
                visible={visible}
                setVisible={setVisible}
              />
            }
          />
        </Routes>
        <Footer />
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
};

export default App;
