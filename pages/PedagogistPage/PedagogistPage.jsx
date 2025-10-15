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
            <h2 className="d-flex justify-content-center mt-3 mb-3 ">
              La Pedagogia Familiare®️
            </h2>
            <div className="col-12 col-md-6">
              <img className="custom-square" src="/Photo/Square.png" alt="" />
            </div>
            <div className="col-12 col-md-6">
              <p className="custom-p">
                La Pedagogia Familiare®️ è stata fondata 40 anni fa dalla
                Prof.ssa Vincenza Palmieri e si è evoluta negli anni ottenendo
                grandi e importanti riconoscimenti.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <p className="custom-p">
                Tale riconoscimento è stato esteso anche all'Associazione
                Nazionale dei Pedagogisti Familiari, fondata nel 2010 come
                Associazione di riferimento per i Pedagogisti Familiari e che ne
                tutela la formazione e la professionalità. La Pedagogia
                Familiare®️ è la scienza che rappresenta l'intera rete di
                strumenti e processi volti a migliorare la qualità del primo
                micro-cosmo di riferimento - la Famiglia - e dei suoi
                componenti, intesi sia come singoli sia come gruppo.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img className="custom-bridge" src="/Photo/Bridge.png" alt="" />
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
