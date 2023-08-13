import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3 me-auto">
          <h5>
            <img src="/image/GYM24.png" className="footer-icon" />
          </h5>
          <p>
            Build strength and confidence at our gym with state-of-the-art
            equipment, personalized training, and a motivating community
          </p>
        </div>
        <div className="col-sm-3 me-auto">
          <h5>Address</h5>
          <p>Republic of Belarus Minsk city Dzerzhinsky Avenue 15</p>
        </div>
        <div className="col-sm-3">
          <h5>Contact</h5>
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <p>+375(44)-777-24-12</p>
          </div>
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>gym24@gmail.com</p>
          </div>
          <div className="d-flex gap-4 mb-3">
            <div className="card-image">
              <img className="ms-2" src="/image/icon_inst.svg" />
            </div>
            <div className="card-image">
              <img className="ms-2" src="/image/icon_facebook.svg" />
            </div>
            <div className="card-image">
              <img className="ms-2" src="/image/icon_twitter.svg" />
            </div>
            <div className="card-image">
              <img className="ms-2" src="/image/icon_youtube.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
