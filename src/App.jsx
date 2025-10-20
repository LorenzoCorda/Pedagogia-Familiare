import HomePage from "../pages/HomePage";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PedagogistPage from "../pages/PedagogistPage/PedagogistPage";
import WhoIsPedagogistPage from "../pages/WhoIsThePedagogist/WhoIsPedagogistPage";
import EffectiveTeaching from "../pages/EffectiveTeaching/EffectiveTeaching";
import AboutMePage from "../pages/AboutMe/AboutMePage";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durata in ms
      once: true, // se true, l’animazione avviene solo la prima volta
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/*    <Route path="/" element={<GuestHomePage />} />
        <Route path="/about" element={<AboutPage />} /> */}

          <Route path="/PedagogistPage" element={<PedagogistPage />} />
          <Route
            path="/WhoIsPedagogistPage"
            element={<WhoIsPedagogistPage />}
          />
          <Route path="/EffectiveTeaching" element={<EffectiveTeaching />} />
          <Route path="/AboutMePage" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
