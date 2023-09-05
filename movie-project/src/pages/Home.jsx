import React, { useEffect, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const getData = (func, params) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3030/${params}`, requestOptions)
      .then((response) => response.json())
      .then((result) => func(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData(setMovies, "spider");
    getData(setData, "gameOf");
  }, []);

  const allMovies = [...movies, ...data];
  return (
    <>
      <Header />
      <Hero />
      <div className="my-5 py-5">
        <div className="row my-5 py-5">
          <div className="d-flex gap-3 align-items-center">
            <div className="line-1"></div>
            <h6 id="movie" className="fw-bold fs-3">
              top in 2022
            </h6>
            <div className="line-2"></div>
          </div>
          <div className="container-fluid shadow-container mt-5">
            <div className="container scroll-container p-0">
              {allMovies === undefined
                ? ""
                : allMovies.map((item) => {
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
                            className="me-4 movie-img"
                          />
                          <button className="movie-btn text-wrap">
                            {item.l}
                          </button>
                        </Link>
                        <div className="text-box text-wrap">
                          <div className="text">{item.l}</div>
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
                            className="me-4 movie-img"
                          />
                          <button className="movie-btn text-wrap">
                            {item.l}
                          </button>
                        </Link>
                        <div className="text-box text-wrap">
                          <div className="text">{item.l}</div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>

        <div className="row my-5 py-5">
          <div className="d-flex gap-3 align-items-center">
            <div className="line-1"></div>
            <h6 className="fw-bold fs-3">movies</h6>
            <div className="line-2"></div>
          </div>
          <div className="container-fluid shadow-container mt-5">
            <div className="container scroll-container p-0">
              {movies === undefined
                ? ""
                : movies.map((item) => {
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
                            className="me-4 movie-img"
                          />
                          <button className="movie-btn text-wrap">
                            {item.l}
                          </button>
                        </Link>
                        <div className="text-box text-wrap">
                          <div className="text">{item.l}</div>
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
                            className="me-4 movie-img"
                          />
                          <button className="movie-btn text-wrap">
                            {item.l}
                          </button>
                        </Link>
                        <div className="text-box text-wrap">
                          <div className="text">{item.l}</div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>

        <div className="row my-5 py-5">
          <div className="d-flex gap-3 align-items-center">
            <div className="line-1"></div>
            <h6 className="fw-bold fs-3">series</h6>
            <div className="line-2"></div>
          </div>
          <div className="container-fluid shadow-container mt-5">
            <div className="container scroll-container p-0">
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
                            className="me-4 movie-img"
                          />
                          <button className="movie-btn text-wrap">
                            {item.l}
                          </button>
                        </Link>
                        <div className="text-box text-wrap">
                          <div className="text">{item.l}</div>
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
                            className="me-4 movie-img"
                          />
                          <button className="movie-btn text-wrap">
                            {item.l}
                          </button>
                        </Link>
                        <div className="text-box text-wrap">
                          <div className="text">{item.l}</div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
