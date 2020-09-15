function getNonProfit(data) {
    $.get("/api/nonProfitSession", function(data) {
      console.log(data)
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