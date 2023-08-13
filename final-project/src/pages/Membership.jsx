import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApiClient from "../repositories/ApiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import NavItem from "../components/NavItem";

export default function Membership() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    var response = await ApiClient.getMemberShips();
    setData(response);
    // console.log(response);
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">Gym membership</h2>
        <div className="d-flex flex-wrap gap-5 justify-content-center">
          {/* {data === []
            ? ""
            :  */}
          {data.map((item) => {
            return (
              <div key={item.id} className="membership-card">
                <div className="card-header text-center border-bottom border-black p-3">
                  <h5>{item.l}</h5>
                  <h5>${item.s}</h5>
                </div>
                <div className="card-body h-75 p-4">
                  <ul className="membership-list">
                    <li>
                      <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                      {item.i.p1}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                      {item.i.p2}
                    </li>
                    <li>
                      {item.i.p3 ? (
                        <>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="me-2"
                          />
                          <span>{item.i.p3}</span>
                        </>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {item.i.p4 ? (
                        <>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="me-2"
                          />
                          <span>{item.i.p4}</span>
                        </>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                  <button className="home-btn membership-btn">Buy</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NavItem />
      <Footer />
    </>
  );
}
