import ApiClient from "../repositories/ApiClient";

class Utils {
  control = (list, item) => {
    var check = false;
    list.map((listItem) => {
      if (listItem.id === item.id) {
        check = true;
      }
    });
    return check;
  };

  async searchBar(param) {
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
        if (!this.control(resultList, item)) {
          resultList.push(item);
        }
      });
    });
    return resultList;
  }
}

export default new Utils();
