import React, { useEffect, useState } from "react";
import "../style.css";
import { useLocation } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApiClient from "../repositories/ApiClient";
import SearchBar from "../components/SearchBar";
import Utils from "../utils/Utils";

export default function Detail() {
  const location = useLocation();
  // const { from } = location.state;
  // const [localStorageFavList, setLocalStorageFavList] = useState([]);
  const [islocalStorageFavList, setBooleanData] = useState(false);
  const [movie, setMovie] = useState({ undefined });
  const [search, setSearch] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    fromControl();
    // prepatePage();
  }, [movie, search, setBooleanData]);

  const fromControl = async () => {
    if (location.state == null) {
      if (!movie.hasOwnProperty("id")) {
        const movieId = location.pathname.split("/")[2];
        const repsonseMovie = await ApiClient.getSingleMovieById(
          movieId,
          setMovie
        );
        setMovie(repsonseMovie);
      }
    } else {
      setMovie(location.state.from.item);
    }
    await prepatePage();
  };
  console.log(movie);

  const prepatePage = async () => {
    setBooleanData(false);
    const result = await ApiClient.getFavorites(
      JSON.parse(localStorage.getItem("user")).id
    );
    // console.log(result);
    if (result != null) {
      // setLocalStorageFavList(JSON.parse(localStorage.getItem("favorites")));

      for (let index = 0; index < result.length; index++) {
        const item = result[index];
        if (movie.id === item.movieId) {
          setBooleanData(true);
        }
      }
    }
  };

  async function handleClick(item) {
    if (islocalStorageFavList) {
      // Unlike
      console.log("Unlike etcem");
      // const filteredlocalStorageFavLists = localStorageFavList.filter(
      //   (item) => {
      //     return item.id !== movie.id;
      //   }
      // );
      // saveToLocalStorage(filteredlocalStorageFavLists);
      await ApiClient.deleteFavorite(item);
      setBooleanData(false);
    } else {
      // Like
      // localStorageFavList.push(from.item);
      // const resultList = [...localStorageFavList, movie];
      // // saveToLocalStorage(resultList);
      // const movieGecici = resultList[resultList.length - 1];
      // console.log(movieGecici);
      // if (typeof movieGecici.mov) {

      // }
      // return;
      var newMovie = { ...item, movieId: item.id };
      delete newMovie.id;
      // console.log(newMovie);
      // return;
      // setMovie(newMovie);
      // newMovie = resultList[resultList.length - 1];
      // newMovie.movieId = movie.id;
      // delete movie.id;
      await ApiClient.addToFavorite(newMovie);
      setBooleanData(true);
    }
  }

  async function searchBar(param) {
    const result = await Utils.searchBar(param);
    setResponse(result);
  }

  function alertClick() {
    islocalStorageFavList === false
      ? Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Favorilere eklendi !",
          showConfirmButton: false,
          timer: 1500,
        })
      : Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Favorilerden çıkarıldı !",
          showConfirmButton: false,
          timer: 1500,
        });
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
      {/*  */}
      {search !== undefined ? (
        <SearchBar response={response} onMerhaba={() => setSearch(undefined)} />
      ) : (
        <div className="container my-5 py-5">
          <div className="row gap-5">
            <div className="col-sm-4">
              <img
                style={{ minHeight: "356px" }}
                src={
                  movie.hasOwnProperty("i")
                    ? movie.i.imageUrl
                    : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                }
                className="w-100 movie-img"
                alt="movie-img"
              />
            </div>
            <div className="col-sm-7 mt-5">
              <h2 className="fs-4 mb-5">{movie.l}</h2>
              <p>STARS: {movie.s}</p>
              <p>YEAR: {movie.y}</p>
              <FontAwesomeIcon
                className="icon mt-5"
                onClick={() => {
                  handleClick(movie);
                  alertClick();
                }}
                icon={islocalStorageFavList === true ? faHeart : faHeartR}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
