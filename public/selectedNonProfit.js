let url = window.location.search;
  let employeeId;

const nameOfNP = $("#nonProfitName")
let selectedNP = ""

if (url.indexOf("?nonProfit_id=") !== -1) {
    employeeId = url.split("=")[1];
    getEmployeeInfo(employeeId);
  };

  // $.get("/api/dashboard", function(donorLoggedIn) {
  //   console.log(donorLoggedIn.id)

    
  // })
function getEmployeeInfo(id) {
    $.get("/api/selectedNonProfit/" + id, function(data) {
      selectedNP = data
        console.log(selectedNP)
        $("#nonProfitName").text(data.nonProfitName)
  
      }).then( function () {
        $.get("/api/dashboard", function(donorLoggedIn) {
          console.log(donorLoggedIn.id)
        })
      }).then(function() {
        $("#saveNonProfit").on("click", function() {
          
          console.log("hi")
          console.log(selectedNP.id)
          
        })

      })
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

