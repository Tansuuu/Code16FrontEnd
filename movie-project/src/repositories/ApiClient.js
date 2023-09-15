import Swal from "sweetalert2";

class ApiClient {
  async login(formData) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        if (data.user === undefined) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Kullanıcı adı veya parola hatalı !",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location = "/";
        }
      });
  }

  async register(formData) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.user === undefined) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Bütün alanları doldurunuz !",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location = "/";
        }
      });
  }

  async getData(func, params) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3030/${params}`, requestOptions)
      .then((response) => response.json())
      .then((result) => func(result))
      .catch((error) => console.log("error", error));
  }

  async getFavorites(userId) {
    const response = await fetch(
      `http://localhost:3000/favorites?userId=${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.json();
  }

  async addToFavorite(item) {
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

  async deleteFavorite(item) {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    // Burada silinecek filmin id sine ihtiyacım olduğu için id sini çekiyorum.
    const responseDelete = await fetch(
      `http://localHost:3000/favorites?userId=${userId}&movieId=${
        item.movieId === undefined ? item.id : item.movieId
      }`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const gecici = await responseDelete.json();
    console.log(gecici);
    const deleteId = gecici[0].id;

    const response = await fetch(
      `http://localHost:3000/favorites/${deleteId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      }
    );
    return response.json();
  }

  async getCategoryData(func) {
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
      .then((result) => func(result))
      .catch((error) => console.log("error", error));
  }

  async getSingleMovieById(id) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      `http://localhost:3030/allMovies/${id}`,
      requestOptions
    );
    return response.json();
    // fetch(`http://localhost:3030/allMovies/${id}`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => func(result))
    //   .catch((error) => console.log("error", error));
  }

  async getallMovies() {
    const response = await fetch("http://localhost:3030/allMovies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  }
}

export default new ApiClient();
