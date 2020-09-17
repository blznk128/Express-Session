let listOfNonProfits = $("#nonProfitList")
let nonProfitList = []

function getUser(data) {
    $.get("/api/dashboard", function(data) {
      console.log(data.first_Name)
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
      nonProfitList.push(data[i].nonProfitName)
    }
    console.log(nonProfitList)
    listOfNonProfits.append(nonProfitList)
  })
  
}

getUser()
