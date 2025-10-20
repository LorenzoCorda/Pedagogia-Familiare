import React from "react";
import Navigation from "../../src/components/navbar/Navigation";
import Footer from "../../src/components/footer/Footer";
import { Link } from "react-router-dom";

import "../PedagogistPage/PedagogistPage.css";

const PedagogistPage = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className="container">
          <div className="row">
            <h2 className="d-flex justify-content-center mt-4 mb-4 ">
              La Pedagogia Familiare®️
            </h2>
            <div className="col-6 col-md-6">
              <img className="custom-square" src="/Photo/Square.png" alt="" />
            </div>
            <div className="col-6 col-md-6">
              <p className="custom-p text-center">
                La Pedagogia Familiare®️, fondata oltre 40 anni fa dalla
                Prof.ssa Vincenza Palmieri, è una scienza che mira a migliorare
                la qualità della vita familiare e dei suoi componenti.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6">
              <p className="custom-p text-center">
                Nel 2010 è nata l’Associazione Nazionale dei Pedagogisti
                Familiari, che ne tutela la formazione e la professionalità,
                riconoscendo il valore e l’evoluzione di questa disciplina.
              </p>
            </div>
            <div className="col-6 col-md-6">
              <div className="d-flex align-items-center justify-content-center h-100">
                <img className="custom-bridge" src="/Photo/Bridge.png" alt="" />
              </div>
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
      <Footer />
    </>
  );
};

export default PedagogistPage;
