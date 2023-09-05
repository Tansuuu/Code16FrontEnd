import React, { useEffect, useState } from "react";
import "../style.css";
import { useLocation } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Detail() {
  const location = useLocation();
  const { from } = location.state;
  const [localStorageFavList, setLocalStorageFavList] = useState([]);
  const [islocalStorageFavList, setBooleanData] = useState(false);

  const prepatePage = () => {
    var result = JSON.parse(localStorage.getItem("favourites"));
    if (result != null) {
      setLocalStorageFavList(JSON.parse(localStorage.getItem("favourites")));
      console.log(result);
      for (let index = 0; index < result.length; index++) {
        const item = result[index];
        if (from.item.id == item.id) {
          setBooleanData(true);
        }
      }
    }
  };

  useEffect(() => {
    prepatePage();
  }, []);

  const saveToLocalStorage = (item) => {
    localStorage.setItem("favourites", JSON.stringify(item));
  };

  async function addToFavorite(item) {
    try {
      const response = await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...item,
          userId: JSON.parse(localStorage.getItem("user")).id,
        }),
      });
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async function deleteFavorite(item) {
    const response = await fetch(`http://localHost:3000/favorites/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return response.json();
    // console.log(response);
  }

  async function handleClick(item) {
    if (islocalStorageFavList) {
      // Unlike
      console.log("Unlike etçem");
      const filteredlocalStorageFavLists = localStorageFavList.filter(
        (item) => {
          return item.id !== from.item.id;
        }
      );
      console.log(filteredlocalStorageFavLists);
      saveToLocalStorage(filteredlocalStorageFavLists);
      await deleteFavorite(item);
      // islocalStorageFavList = false;
      setBooleanData(false);
    } else {
      // Like
      // localStorageFavList.push(from.item);
      console.log("Like etçem");

      const resultList = [...localStorageFavList, from.item];
      saveToLocalStorage(resultList);
      await addToFavorite(resultList[resultList.length - 1]);
      setBooleanData(true);
    }
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
      <Header />
      {/* {console.log(`render ${islocalStorageFavList}`)} */}
      <div className="container my-5 py-5">
        <div className="row gap-5">
          <div className="col-sm-4">
            <img
              style={{ minHeight: "356px" }}
              src={
                from.item.hasOwnProperty("i")
                  ? from.item.i.imageUrl
                  : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
              }
              className="w-100 movie-img"
              alt="movie-img"
            />
          </div>
          <div className="col-sm-7 mt-5">
            <h2 className="fs-4 mb-5">{from.item.l}</h2>
            <p>STARS: {from.item.s}</p>
            <p>YEAR: {from.item.y}</p>
            <FontAwesomeIcon
              className="icon mt-5"
              onClick={() => {
                handleClick(from.item);
                alertClick();
              }}
              icon={islocalStorageFavList === true ? faHeart : faHeartR}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
