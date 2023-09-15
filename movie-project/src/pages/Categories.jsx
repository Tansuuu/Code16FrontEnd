import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApiClient from "../repositories/ApiClient";
import SearchBar from "../components/SearchBar";

export default function Categories() {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    getData();
  }, [location]);

  async function getData() {
    await ApiClient.getCategoryData(setData);
  }

  const [search, setSearch] = useState();
  const [response, setResponse] = useState();

  function control(list, item) {
    var check = false;
    list.map((listItem) => {
      if (listItem.id === item.id) {
        check = true;
      }
    });
    return check;
  }

  async function searchBar(param) {
    const allMovies = await ApiClient.getallMovies();
    const filteredParam = param.trim();
    const paramList = filteredParam.split(" ");
    const filteredList = paramList.filter((item) => item != "");
    console.log(filteredList);
    var resultList = [];
    filteredList.map((item) => {
      const itemList = allMovies.filter((movie) =>
        movie.l.toUpperCase().includes(item.toUpperCase())
      );
      itemList.map((item) => {
        if (!control(resultList, item)) {
          resultList.push(item);
        }
      });
    });
    setResponse(resultList);
  }

  return (
    <>
      <Header
        onChange={(param) => {
          if (param === "") {
            setSearch(undefined);
          } else {
            setSearch(param);
            searchBar(param);
          }
        }}
      />
      {search !== undefined ? (
        <SearchBar response={response} />
      ) : (
        <div className="my-5 py-5">
          <div className="d-flex gap-3 align-items-center">
            <div className="line-1"></div>
            <h6 id="movie" className="fs-3">
              {location.pathname === "/category/movies" ? "MOVİES" : "SERİES"}
            </h6>
            <div className="line-2"></div>
          </div>
          <div className="container container-center">
            {data === undefined
              ? ""
              : data.map((item) => {
                  return item.hasOwnProperty("i") ? (
                    <div className="movies" key={item.id}>
                      <Link
                        to={`/detail/${item.id}`}
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
                        to={`/detail/${item.id}`}
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
      )}

      <Footer />
    </>
  );
}
