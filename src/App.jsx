import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import PedagogistPage from "../pages/PedagogistPage/PedagogistPage";
import WhoIsPedagogistPage from "../pages/WhoIsThePedagogist/WhoIsPedagogistPage";
import EffectiveTeaching from "../pages/EffectiveTeaching/EffectiveTeaching";

const App = () => {
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
