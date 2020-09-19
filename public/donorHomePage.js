let listOfNonProfits = $("#nonProfitList")
let nonProfitList = []

$(document).on("click", "button.edit", goToNonProfit);

function getUser(data) {
    $.get("/api/dashboard", function(data) {
      console.log(data)
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
    console.log(nonProfitList)
    
  })
  
}

function goToNonProfit() {
  let currentPost = $(this).parent().attr("id")
  window.location.href = "/selectedNonProfit?nonProfit_id=" + currentPost;
  console.log(currentPost)
}

function getFavoriteNPList() {
  $.get("/api/retrieveFavoriteNP", (data) =>{
    console.log(data)
  })
}

getUser()