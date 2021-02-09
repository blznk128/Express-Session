let listOfNonProfits = $("#nonProfitList")
let listOfFavoriteNonProfits = $("#favoriteNonProfitList")
let nonProfitList = []
let favoriteNPSaved = []

$(".dropdown-trigger").dropdown();
$('.sidenav').sidenav();
$('.collapsible').collapsible();

$(document).on("click", "a.testOne", goToNonProfit);

function getUser(data) {
    $.get("/api/dashboard", function(data) {
      
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

$.get("api/allNonProfits", function(data) {
    for ( let i = 0; i < data.length; i++) {
      console.log(data)
      nonProfitList.push(data[i].nonProfitName)
      
      $(".edit").append("<div class='col s3 m2'>" + "<div class='card'>" + "<div class='card-image'>" + 
      "<img src='https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/45/2019/11/MS_Penguin-Counting-Story_1900x800.jpg'>" + "<span class='card-title'>" + nonProfitList[i] + 
      "</span>" + "</div>" + "<div class='card-content'>" + "<p>" + "blah " + "</p>" + "</div>" + "<div class='card-action'>" + 
      "<a id =" + data[i].id + " href='#'" + " class='testOne'"+">" + nonProfitList[i] + "</a>" + "</div>" + "</div>" + "</div>")
      
    }
  })

function goToNonProfit() {
  let currentPost = $(this).attr("id")
  window.location.href = "/selectedNonProfit?nonProfit_id=" + currentPost;
  console.log(currentPost)
  
}

$.get("/api/dashboard", function(retrievedInfo) {
    for ( let i = 0; i < retrievedInfo.FavoriteNonProfits.length; i++) {
      favoriteNPSaved.push(retrievedInfo.FavoriteNonProfits[i].favoriteNP)
      console.log(retrievedInfo.FavoriteNonProfits[i].id)
      // listOfNonProfits.empty()
      // listOfFavoriteNonProfits.append("<li id = " + retrievedInfo.FavoriteNonProfits[i].id + ">" + favoriteNPSaved[i] + "<button class = 'edit'>" + "see profile" + "</button>" +"</li>")
      listOfFavoriteNonProfits.append("<div class='col s3 m2'>" + "<div class='card'>" + "<div class='card-image'>" + 
      "<img src='https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/45/2019/11/MS_Penguin-Counting-Story_1900x800.jpg'>" + "<span class='card-title'>" + nonProfitList[i] + 
      "</span>" + "</div>" + "<div class='card-content'>" + "<p>" + "blah " + "</p>" + "</div>" + "<div class='card-action'>" + 
      "<a id =" + retrievedInfo.FavoriteNonProfits[i].id + " href='#'" + " class='testOne'"+">" + favoriteNPSaved[i] + "</a>" + "</div>" + "</div>" + "</div>")
    }
    
  })

getUser()