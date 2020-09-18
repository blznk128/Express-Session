let url = window.location.search;
  let employeeId;

if (url.indexOf("?nonProfit_id=") !== -1) {
    employeeId = url.split("=")[1];
    getEmployeeInfo(employeeId);
  };


function getEmployeeInfo(id) {
    $.get("/api/selectedNonProfit/" + id, function(data) {
        console.log(data)
        $("#nonProfitName").text(data.nonProfitName)
        $("#saveNonProfit").on("click", function() {
          console.log("hi")
        })
      });
  }



function getUser(data) {
  $.get("/api/dashboard", function(data) {
    userLoggedIn.text(data.userName)
    $("#movieSave").on("click", function() {
      event.preventDefault()
      let newMovie = {
        favoriteMovies: informationMovie.val()
    }
      addMovie(newMovie)
    })
    $("#savedMovie").on("click", function() {
      event.preventDefault()
      console.log("hi")
      window.location.href = "/savedMovies"
    })
  })
};