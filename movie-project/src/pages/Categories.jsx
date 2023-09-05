import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Categories() {
  const location = useLocation();
  console.log(location.pathname);
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [location]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:3030/${
        location.pathname === "/category/movies" ? "spider" : "gameOf"
      }`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };
  console.log(data);

  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <div className="d-flex gap-3 align-items-center">
          <div className="line-1"></div>
          <h6 id="movie" className="fs-3">
            {location.pathname === "/category/movies" ? "MOVİES" : "SERİES"}
          </h6>
          <div className="line-2"></div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          {data === undefined
            ? ""
            : data.map((item) => {
                return item.hasOwnProperty("i") ? (
                  <div className="movies" key={item.id}>
                    <Link
                      to={`/detail/${item.l}`}
                      state={{ from: { item } }}
                      className="d-flex flex-column gap-2 text-decoration-none"
                    >
                      <img
                        style={{ height: "356px", width: "240px" }}
                        src={item.i.imageUrl}
                        className="movie-img"
                      />
                      <button className="movie-btn btn-category text-wrap">
                        {item.l}
                      </button>
                    </Link>
                    <div className="text-box text-box-category text-wrap">
                      <div className="text text-category">{item.l}</div>
                    </div>
                  </div>
                ) : (
                  <div className="movies" key={item.id}>
                    <Link
                      className="d-flex flex-column gap-2 text-decoration-none"
                      to={`/detail/${item.l}`}
                      state={{ from: { item } }}
                      key={item.id}
                    >
                      <img
                        style={{ height: "356px", width: "240px" }}
                        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                        className="movie-img"
                      />
                      <button className="movie-btn btn-category text-wrap">
                        {item.l}
                      </button>
                    </Link>
                    <div className="text-box text-box-category text-wrap">
                      <div className="text text-category">{item.l}</div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
}
