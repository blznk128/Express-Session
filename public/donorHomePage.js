let listOfNonProfits = $("#nonProfitList")
let listOfFavoriteNonProfits = $("#favoriteNonProfitList")
let nonProfitList = []
let favoriteNPSaved = []


$(document).on("click", "button.edit", goToNonProfit);

function getUser(data) {
    $.get("/api/dashboard", function(data) {
      console.log(data.FavoriteNonProfits[0].favoriteNP)
      $("#donorUser").text(data.first_Name)
    })
  };

function goToLogOff(userId) {
  event.preventDefault();
  $.post("/api/logout", userId, () => {
      console.log(userId)
      window.location.href = "/"
  })
};

function allNonProfits() {
  event.preventDefault();
  
  $.get("api/allNonProfits", function(data) {
    for ( let i = 0; i < data.length; i++) {
      console.log(data)
      nonProfitList.push(data[i].nonProfitName)
      listOfNonProfits.append("<li id = " + data[i].id + ">" + nonProfitList[i] + "<button class = 'edit'>" + "see profile" + "</button>" +"</li>")
    }
  })
  
}

function goToNonProfit() {
  let currentPost = $(this).parent().attr("id")
  window.location.href = "/selectedNonProfit?nonProfit_id=" + currentPost;
  console.log(currentPost)
}

function getFavoriteNPList() {
  $.get("/api/dashboard", function(retrievedInfo) {
    for ( let i = 0; i < retrievedInfo.FavoriteNonProfits.length; i++) {
      favoriteNPSaved.push(retrievedInfo.FavoriteNonProfits[i].favoriteNP)
      console.log(retrievedInfo.FavoriteNonProfits[i].id)
      // listOfNonProfits.empty()
      listOfFavoriteNonProfits.append("<li id = " + retrievedInfo.FavoriteNonProfits[i].id + ">" + favoriteNPSaved[i] + "<button class = 'edit'>" + "see profile" + "</button>" +"</li>")
    }
    
  })
}




getUser()