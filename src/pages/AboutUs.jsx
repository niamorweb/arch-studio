import React from "react";
import DataPeople from "../data/DataPeople.json";

export default function AboutUs() {
  return (
    <>
      <div className="name_page">
        <div className="line"></div>
        <span className="name">ABOUT US</span>
      </div>
      <main className="about_main_container">
        <div className="about_intro">
          <div className="hero">
            <img className="mobile" src="/about/mobile/image-hero.jpg" alt="" />
            <img className="tablet" src="/about/tablet/image-hero.jpg" alt="" />
            <img
              className="desktop"
              src="/about/desktop/image-hero.jpg"
              alt=""
            />
          </div>
          <h1 className="large_title">About Us</h1>
          <div className="box_text">
            <h1>
              Your team <br /> of professionals
            </h1>

            <p>
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>

        <section className="about_description_heritage">
          <div className="box_text">
            <h1>
              Our <br /> Heritage
            </h1>
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
              <br />
              <br />
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
              <br />
              <br />
              Our small team of world-class professionals provides input on
              every project. The
            </p>
          </div>
          <img
            className="desktop"
            src="/about/desktop/image-heritage.jpg"
            alt=""
          />
        </section>
        <div className="leaders">
          <h1>
            The <br /> Leaders
          </h1>

          <div className="people_section">
            {DataPeople.map((x) => {
              return (
                <div className="box_person">
                  <div className="img_person">
                    <img src={x.img} alt="" />
                    <div className="social_links_desktop desktop">
                      <img src="/icons/icon-linkedin-white.svg" alt="" />
                      <img src="/icons/icon-twitter-white.svg" alt="" />
                    </div>
                  </div>
                  <div className="info_links_person">
                    <div className="info_person">
                      <h3>{x.name}</h3>
                      <p>{x.job}</p>
                    </div>
                    <div className="social_links  mobile tablet">
                      <img src="/icons/icon-linkedin.svg" alt="" />
                      <img src="/icons/icon-twitter.svg" alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
