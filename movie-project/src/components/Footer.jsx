import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-4 border-end">
            <h5 className="text-center">
              <FontAwesomeIcon icon={faCircle} size="2xs" /> social media links
            </h5>
            <ul className="footer-list">
              <li>
                <img
                  src="/🦆 icon _github_.svg"
                  alt="github"
                  className="me-3"
                />
                nourddine benyahya
              </li>
              <li>
                <img
                  src="/🦆 icon _linkedin_.svg"
                  alt="linkedin"
                  className="me-3"
                />
                nourddine benyahya
              </li>
              <li>
                <img
                  src="/🦆 icon _twitter_.svg"
                  alt="twitter"
                  className="me-3"
                />
                EedinNour
              </li>
              <li>
                <img
                  src="/🦆 icon _phone call_.svg"
                  alt="phone"
                  className="me-3"
                />
                +212607-081298
              </li>
              <li>
                <img
                  src="/🦆 icon _facebook_.svg"
                  alt="facebook"
                  className="me-3"
                />
                nourddine ben
              </li>
            </ul>
          </div>
          <div className="col-sm-4 border-end text-center">
            <h5 className="mb-5">
              <FontAwesomeIcon icon={faCircle} size="2xs" /> sponsors
            </h5>
            <p>Cisco - Amazon - Google -Azure - LinkedIn</p>
            <p>IBM -Facebook -Tesla - Appel -Microsoft</p>
            <p>Ofppt - 1337</p>
          </div>
          <div className="col-sm-4 text-center">
            <h5>
              <FontAwesomeIcon icon={faCircle} size="2xs" /> company
            </h5>
            <div className="mt-5">
              <div className="row">
                <div className="col-sm-6">Register</div>
                <div className="col-sm-6">Login</div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6">Wishlist</div>
                <div className="col-sm-6">Our Products</div>
              </div>
            </div>
            <div className="search-bar mt-5 ms-5 me-3">
              <input
                className="header-search py-1 px-3 text-white w-100"
                type="text"
                placeholder="Search"
              />
              <FontAwesomeIcon
                className="search-icon"
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center footer-text">
        <p>A Fawectt book</p>
        <p>Published by The Random House Publishing Group</p>
        <p>Copyright © 2022 by nourddine</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
