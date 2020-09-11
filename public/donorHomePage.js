function getUser(data) {
    $.get("/api/dashboard", function(data) {
      console.log(data.first_Name)
      $("#donorUser").text(data.first_Name)
    })
  };

function goToLogOff(userId) {
  event.preventDefault();
  console.log("hi")
  $.post("/api/logout", userId, () => {
      console.log(userId)
      window.location.href = "/"
  })
};

getUser()