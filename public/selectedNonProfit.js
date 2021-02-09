let url = window.location.search;
let employeeId;
const nameOfNP = $("#nonProfitName")
let selectedNP = ""
let loggedInDonor = ""

if (url.indexOf("?nonProfit_id=") !== -1) {
    employeeId = url.split("=")[1];
    getEmployeeInfo(employeeId);
  };

  function addFavoriteNP(FavoriteNonProfit) {
    $.post("/api/saveFavoriteNonProfit", FavoriteNonProfit, () => {
    })
}

function getEmployeeInfo(id) {
    $.get("/api/selectedNonProfit/" + id, function(data) {
      selectedNP = data
        console.log(selectedNP)
        $("#nonProfitName").text(data.nonProfitName)
  
      }).then( function () {
        $.get("/api/dashboard", function(donorLoggedIn) {
          loggedInDonor = donorLoggedIn
          console.log("logged in donor", loggedInDonor)
        })
      }).then(function() {
        $("#saveNonProfit").on("click", function() {
          console.log("non profit id",selectedNP.nonProfitName)
          console.log("number 2 logged in donor ", loggedInDonor.id)
          let saveNewNonProfitToDonor = {
            favoriteNP: selectedNP.nonProfitName,
            DonorId: loggedInDonor.id
          }
          addFavoriteNP(saveNewNonProfitToDonor)

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

