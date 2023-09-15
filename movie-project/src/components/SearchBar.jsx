import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ response, onMerhaba }) {
  return (
    <>
      <div className="container favorite-center d-flex flex-wrap gap-3 my-5">
        {response?.length === 0 ? (
          <h3 className="my-5">Bulunamadı !</h3>
        ) : (
          response?.map((item) => {
            return (
              <div className="movies" key={item.id} onClick={() => onMerhaba()}>
                <Link
                  to={`/detail/${item.id}`}
                  state={{ from: { item } }}
                  className="container d-flex flex-column gap-2 text-decoration-none"
                >
                  {item.hasOwnProperty("i") ? (
                    <img
                      style={{ height: "356px", width: "240px" }}
                      src={item.i.imageUrl}
                      className="movie-img"
                    />
                  ) : (
                    <img
                      style={{ height: "356px", width: "240px" }}
                      src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                      className="movie-img"
                    />
                  )}
                  <button className="movie-btn btn-category text-wrap">
                    {item.l}
                  </button>
                </Link>
                <div className="text-box text-box-category text-wrap">
                  <div className="text text-category">{item.l}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
