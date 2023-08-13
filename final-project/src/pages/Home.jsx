import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavItem from "../components/NavItem";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home container">
        <div className="home-shadow"></div>
        <div className="home-text">
          <h1 className="home-title">Free trial session with a trainer</h1>
          <div>
            <button className="home-btn">Detailed</button>
          </div>
        </div>
      </div>
      <NavItem />
      <Footer />
    </>
  );
}
