import React, { useState } from "react";

export default function Hero() {
  return (
    <div className="container my-5 hero d-flex">
      <div className="w-50 hero-text">
        <h1>ShowUp</h1>
        <h3 className="text-white">enjoy watching</h3>
        <p className="mt-5 ms-5 text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enimad minim veniam, quis nostrud exerci
        </p>
        <button className="mt-5 hero-btn">
          <a href="#movie">start now</a>
        </button>
      </div>
      <div className="hero-img">
        <img src="/home-page.png" alt="home" />
      </div>
    </div>
  );
}
