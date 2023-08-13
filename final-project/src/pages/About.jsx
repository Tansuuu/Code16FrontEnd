import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavItem from "../components/NavItem";

export default function About() {
  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <div className="row gap-5">
          <div className="col-sm-5">
            <h2 className="mb-3">About us</h2>
            <p>
              Gym24 is a leading fitness center located near Grushevka metro
              station, offering over 1500 sq. m of space dedicated to
              top-of-the-line workout equipment from leading brands such as
              Hammer Strength, Life Fitness, and TechnoGym.
            </p>
            <p>
              With affordable membership options, Gym24 is accessible to
              everyone who wants to reach their fitness goals, whether it's
              building strength, increasing endurance, or losing weight.
            </p>
            <p>
              Certified trainers at Gym24 provide expert guidance and support to
              develop personalized workout plans tailored to each individual's
              needs and goals.
            </p>
          </div>
          <div className="col-sm-5">
            <div id="carousel" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/image/gym.png"
                    className="d-block w-100"
                    alt="gym"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/image/gym1.png"
                    className="d-block w-100"
                    alt="gym"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/image/gym2.png"
                    className="d-block w-100"
                    alt="gym"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/image/gym3.png"
                    className="d-block w-100"
                    alt="gym"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavItem />
      <Footer />
    </>
  );
}
