import React from "react";
import Navigation from "../../src/components/navbar/Navigation";
import Footer from "../../src/components/footer/Footer";
import { Link } from "react-router-dom";

const EffectiveTeaching = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className="Container">
          <div className="Row">
            <div className="col">
              <div className="d-flex background align-items-center">
                <img
                  className="custom-img-f"
                  src="/Photo/Familyhands.jpeg"
                  alt=""
                />
                <div className="fs-5">
                  <h2 className="d-flex text-start">La Didatica Efficace®️</h2>
                  E' la scienza che rappresenta l’intera rete di strumenti e
                  processi volti a migliorare la qualità del primo micro-cosmo
                  di riferimento - la Famiglia - e dei suoi componenti, intesi
                  sia come singoli sia come gruppo. L’unica professione che si
                  ispira alla Dichiarazione Universale dei Diritti Umani nasce
                  per supportare le famiglie attraverso il loro intero ciclo di
                  vita, regolamentata da un proprio Regolamento e da un Codice
                  Deontologico che ne rappresentano le fondamenta.
                </div>
              </div>
              <div className="custom-btn mb-4">
                <Link
                  className="text-decoration-none fs-5 custom-link-back lh-1"
                  to="/"
                >
                  Indietro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EffectiveTeaching;
