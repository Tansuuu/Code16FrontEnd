import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApiClient from "../repositories/ApiClient";
import NavItem from "../components/NavItem";

export default function Trainers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    var response = await ApiClient.getTraniers();
    setData(response);
  };

  return (
    <>
      <Header />
      <h2 className="text-center mt-5">Trainers staff</h2>
      <div className="container my-5 d-flex justify-content-center flex-wrap gap-3">
        {/* data === []
          ? ""
          :  */}
        {data.map((item) => {
          return (
            <div key={item.id} className="trainers-card">
              <img src={item.imageUrl} alt="1" />
              <div className="card-body text-center mt-2">
                <h5 className="card-title">{item.n}</h5>
                <div className="mt-3 d-flex gap-4 justify-content-center align-items-center">
                  <div className="card-image">
                    <img src="/image/icon_inst.svg" />
                  </div>
                  <div className="card-image">
                    <img src="/image/icon_twitter.svg" />
                  </div>
                  <div className="card-image">
                    <img src="/image/icon_youtube.svg" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <NavItem />
      <Footer />
    </>
  );
}
