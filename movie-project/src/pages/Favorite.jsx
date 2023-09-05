import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Favorite() {
  const [favorite, setFavorite] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"))?.id;

  async function getData() {
    const favorites = await getFavorites(user);
    setFavorite(favorites);
  }

  useEffect(() => {
    setFavorite();
    getData();
  }, []);

  async function getFavorites(userId) {
    const response = await fetch(
      `http://localhost:3000/favorites?userId=${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.json();
  }

  return (
    <>
      <Header />
      <div className="my-5 py-5">
        <div className="d-flex gap-3 align-items-center">
          <div className="line-1"></div>
          <h6 id="movie" className="fs-3">
            FAVOURİTES
          </h6>
          <div className="line-2"></div>
        </div>
        <div className="container d-flex flex-wrap gap-5">
          {favorite === null ? (
            <h5 className="container my-5 py-5">
              Favorileriniz bulunmamaktadır !
            </h5>
          ) : (
            favorite?.map((item) => {
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
                    to={`/detail/${item.l}`}
                    state={{ from: { item } }}
                    key={item.id}
                    className="d-flex flex-column gap-2 text-decoration-none"
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
                //   <Link to={`/${item.l}`} state={{ from: { item } }} key={item.id}>
                //     <img
                //       style={{ height: "375px" }}
                //       src={item.i.imageUrl}
                //       className="img-thumbnail me-3 p-2"
                //     />
                //   </Link>
                // ) : (
                //   <Link to={`/${item.l}`} state={{ from: { item } }} key={item.id}>
                //     <img
                //       style={{ height: "375px", width: "260px" }}
                //       src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                //       className="img-thumbnail me-3 mb-3 p-2"
                //     />
                //   </Link>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
