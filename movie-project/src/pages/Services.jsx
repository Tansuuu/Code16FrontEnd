import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <h2>principal service</h2>
        <div className="d-flex justify-content-between mt-5">
          <div className="service-card">
            <div className="bg-purple rounded-top-4 text-center py-2">
              basic
            </div>
            <ul className="my-5 px-3">
              <li>
                Watch all you want. Ad-free. <img src="/Check_All_Big.png" />
              </li>
              <li>
                Recommendations just for you. <img src="/Check_All_Big.png" />
              </li>
              <li>
                Change or cancel your plan anytime.
                <img src="/Check_All_Big.png" />
              </li>
              <li>
                Resolution
                <div className="float-end">
                  <span className="me-3">480p</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
              <li>
                Video quality
                <div className="float-end">
                  <span className="me-3">Good</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
              <li>
                Monthly price
                <div className="float-end">
                  <span className="me-3">MAD65</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
            </ul>
            <div className="bg-purple rounded-bottom-4 text-center py-2">
              buy
            </div>
          </div>
          <div className="service-card">
            <div className="bg-purple rounded-top-4 text-center py-2">
              standard
            </div>
            <ul className="my-5 px-3">
              <li>
                Watch all you want. Ad-free. <img src="/Check_All_Big.png" />
              </li>
              <li>
                Recommendations just for you. <img src="/Check_All_Big.png" />
              </li>
              <li>
                Change or cancel your plan anytime.
                <img src="/Check_All_Big.png" />
              </li>
              <li>
                Resolution
                <div className="float-end">
                  <span className="me-3">1080p</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
              <li>
                Video quality
                <div className="float-end">
                  <span className="me-3">Better</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
              <li>
                Monthly price
                <div className="float-end">
                  <span className="me-3">MAD95</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
            </ul>
            <div className="bg-purple rounded-bottom-4 text-center py-2">
              buy
            </div>
          </div>
          <div className="service-card">
            <div className="bg-purple rounded-top-4 text-center py-2">
              premuim
            </div>
            <ul className="my-5 px-3">
              <li>
                Watch all you want. Ad-free. <img src="/Check_All_Big.png" />
              </li>
              <li>
                Recommendations just for you. <img src="/Check_All_Big.png" />
              </li>
              <li>
                Change or cancel your plan anytime.
                <img src="/Check_All_Big.png" />
              </li>
              <li>
                Resolution
                <div className="float-end">
                  <span className="me-3">4K+HDR</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
              <li>
                Video quality
                <div className="float-end">
                  <span className="me-3">Best</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
              <li>
                Monthly price
                <div className="float-end">
                  <span className="me-3">MAD125</span>
                  <img src="/Check_All_Big.png" />
                </div>
              </li>
            </ul>
            <div className="bg-purple rounded-bottom-4 text-center py-2">
              buy
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
