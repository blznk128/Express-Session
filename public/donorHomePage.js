function getUser(data) {
    $.get("/api/dashboard", function(data) {
      console.log(data.first_Name)
    })
  };

  getUser()