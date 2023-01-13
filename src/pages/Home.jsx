import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DataPortfolio from "../data/DataPortfolio.json";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Home() {
  let slideSelected = 1;

  const dataSlide = [
    {
      id: "s1",
      projectName: "Project Paramour",
      projectDesc:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
      imgMobile: "../../arch-studio/home/mobile/image-hero-paramour.jpg",
      imgTablet: "../../arch-studio/home/tablet/image-hero-paramour.jpg",
      imgDesktop: "../../arch-studio/home/desktop/image-hero-paramour.jpg",
    },
    {
      id: "s2",
      projectName: "Seraph Station",
      projectDesc:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
      imgMobile: "../../arch-studio/home/mobile/image-hero-seraph.jpg",
      imgTablet: "../../arch-studio/home/tablet/image-hero-seraph.jpg",
      imgDesktop: "../../arch-studio/home/desktop/image-hero-seraph.jpg",
    },
    {
      id: "s3",
      projectName: "Federal II Tower",
      projectDesc:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
      imgMobile: "../../arch-studio/home/mobile/image-hero-federal.jpg",
      imgTablet: "../../arch-studio/home/tablet/image-hero-federal.jpg",
      imgDesktop: "../../arch-studio/home/desktop/image-hero-federal.jpg",
    },
    {
      id: "s4",
      projectName: "Trinity Bank Tower",
      projectDesc:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
      imgMobile: "../../arch-studio/home/mobile/image-hero-trinity.jpg",
      imgTablet: "../../arch-studio/home/tablet/image-hero-trinity.jpg",
      imgDesktop: "../../arch-studio/home/desktop/image-hero-trinity.jpg",
    },
  ];

  return (
    <>
      {" "}
      <div className="name_page">
        <div className="line"></div>
        <span className="name">HOME</span>
      </div>
      <main>
        <section className="home_intro">
          <div className="container_sliders">
            <Slide>
              {dataSlide.map((x) => {
                return (
                  <div className="carousel-cell">
                    <img className="img_hero mobile" src={x.imgMobile} alt="" />
                    <img className="img_hero tablet" src={x.imgTablet} alt="" />
                    <img
                      className="img_hero desktop"
                      src={x.imgDesktop}
                      alt=""
                    />

                    <div className="content_intro">
                      <h1>{x.projectName}</h1>
                      <p>{x.projectDesc}</p>
                      <NavLink className="btn_link" to={"/portfolio"}>
                        {" "}
                        See Our Portfolio
                        <img src="../../arch-studio/icons/icon-arrow-white.svg" alt="" />
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </Slide>
          </div>
        </section>

        <section className="home_welcome">
          <span className="large_title">Welcome</span>
          <div className="box_text">
            <h1>
              Welcome to <br />
              Arch Studio
            </h1>
            <p className="t_op75">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
              <br />
              <br />
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
              <br />
              <br />
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
          <img
            className="desktop"
            src="../../arch-studio/home/desktop/image-welcome.jpg"
            alt=""
          />
        </section>

        <section className="home_smallteam">
          <img
            className="img_content mobile"
            src="../../arch-studio/home/mobile/image-small-team.jpg"
            alt=""
          />
          <img
            className="img_content tablet"
            src="../../arch-studio/home/tablet/image-small-team.jpg"
            alt=""
          />
          <img
            className="img_content desktop"
            src="../../arch-studio/home/desktop/image-small-team.jpg"
            alt=""
          />
          <div className="box_text">
            <h1>
              Small team, <br />
              big ideas
            </h1>
            <NavLink className="btn_link" to="/arch-studio/portfolio">
              About Us
              <img src="../../arch-studio/icons/icon-arrow-white.svg" alt="" />
            </NavLink>
          </div>
        </section>

        <section className="home_featured">
          <div className="header_feature">
            <h1>Featured</h1>
            <NavLink className="btn_link btn_big_screen" to="/arch-studio/portfolio">
              See All
              <img src="../../arch-studio/icons/icon-arrow-white.svg" alt="" />
            </NavLink>
          </div>
          <div className="container_features">
            {DataPortfolio.map((x) => {
              if (
                x.title === "Project Del Sol" ||
                x.title === "228B Tower" ||
                x.title === "Le Prototype"
              )
                return (
                  <div className="box_feature">
                    <img
                      className="img_content mobile"
                      src={x.imgMobile}
                      alt=""
                    />
                    <img
                      className="img_content tablet"
                      src={x.imgTablet}
                      alt=""
                    />
                    <img
                      className="img_content desktop"
                      src={x.imgDesktop}
                      alt=""
                    />
                    <div className="box_text">
                      <h3>{x.title}</h3>
                      <p className="t_op75">View All Projects</p>
                    </div>
                  </div>
                );
            })}
            <NavLink className="btn_link mobile" to="/arch-studio/portfolio">
              See All
              <img src="../../arch-studio/icons/icon-arrow-white.svg" alt="" />
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
}
