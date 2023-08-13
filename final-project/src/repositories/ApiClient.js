class ApiClient{
    BASE_URL = " http://localhost:3030";
    async getMemberShips(){
        var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          try {
            var response = await fetch(`${this.BASE_URL}/membership`, requestOptions);
            return response.json();
          } catch (error) {
            console.log(`Error - getMemberShips -> ${error}`);
            return null;
          }
        //   fetch(`${BASE_URL}/membership`, requestOptions)
        //     .then((response) => response.json())
        //     .then((result) => setData(result))
        //     .catch((error) => console.log("error", error));
    }

    async getTraniers(){
      var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        try {
          var response = await fetch(`${this.BASE_URL}/traniers`, requestOptions);
          return response.json();
        } catch (error) {
          console.log(`Error - getMemberShips -> ${error}`);
          return null;
        }
      }
   
}

export default new ApiClient();