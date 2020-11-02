const user = $("#userName");
const userPassword = $("#passWord");

function logInNonProfit() {
    event.preventDefault()
    let logInNP = {
        userName: user.val(),
        password: userPassword.val()
    }
    console.log(logInNP)
    logIn(logInNP)
};

function logIn(nPId) {
    $.post("/api/nonProfitLogin", nPId, () => {
        
        window.location.href = "/nonProfitHome"
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