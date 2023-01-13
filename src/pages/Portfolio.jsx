import React from "react";
import DataPortfolio from "../data/DataPortfolio.json";

export default function Portfolio() {
  return (
    <>
      <div className="name_page">
        <div className="line"></div>
        <span className="name">PORTFOLIO</span>
      </div>
      <main>
        <div className="portfolio_collection">
          {" "}
          {DataPortfolio.map((x) => {
            return (
              <div className="container_item">
                {" "}
                <img className="mobile" src={x.imgMobile} alt="" />
                <img className="tablet" src={x.imgTablet} alt="" />
                <img className="desktop" src={x.imgDesktop} alt="" />
                <div className="box_content">
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
