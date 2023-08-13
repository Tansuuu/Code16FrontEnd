import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavItem from "../components/NavItem";

export default function Advantages() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <h2 className="my-5 pt-5">Reasons to join</h2>
          <div className="col-sm-6 advantages-card">
            <div className="col-sm-2">
              <img src="/image/icon_line.svg" className="ps-3 icon" />
            </div>
            <div className="col-sm-10">
              <h5>15000 sq.m.</h5>
              <p className="w-75">
                A spacious gym for sports – a safe distance between exercise
                machines
              </p>
            </div>
          </div>
          <div className="col-sm-6 advantages-card">
            <div className="col-sm-2">
              <img src="/image/icon_line.svg" className="ps-3 icon" />
            </div>
            <div className="col-sm-10">
              <h5>More than 200 equipment</h5>
              <p className="w-75">
                No queues at the simulators. Premium equipment from LifeStyle,
                Hammer Strength, TechnoGym.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5 pb-5">
          <div className="col-sm-6 advantages-card">
            <div className="col-sm-2">
              <img src="/image/icon_time.svg" className="icon" />
            </div>
            <div className="col-sm-10">
              <h5>4 fitness zones</h5>
              <p className="w-75">
                From cardio to functional and cycle. Separate area for boxing
                and mixed martial arts
              </p>
            </div>
          </div>
          <div className="col-sm-6 advantages-card">
            <div className="col-sm-2">
              <img src="/image/icon_time.svg" className="icon" />
            </div>
            <div className="col-sm-10">
              <h5>Round-the-clock operation</h5>
              <p className="w-75">
                The gym is open 24 hours a day, also works on all holidays and
                weekends
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavItem />
      <Footer />
    </>
  );
}
