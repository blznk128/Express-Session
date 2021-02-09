function getNonProfit(data) {
    $.get("/api/nonProfitSession", function(data) {
      console.log(data)
      $("#nonProfitUser").append(data.nonProfitName)
      $("#aboutMeSummary").append(data.aboutMe)
    })
  };

  function goToLogOffNP(userId) {
    event.preventDefault();
    console.log("hi")
    $.post("/api/logout", userId, () => {
        console.log(userId)
        window.location.href = "/"
    })
  };

getNonProfit()