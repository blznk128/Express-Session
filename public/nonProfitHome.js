function getNonProfit(data) {
    $.get("/api/nonProfitSession", function(data) {
      console.log(data)
    })
  };

  getNonProfit()