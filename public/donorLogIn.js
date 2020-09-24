const user = $("#userName");
const userPassword = $("#passWord");

$(".dropdown-trigger").dropdown();
$('.sidenav').sidenav();
$('.collapsible').collapsible();

function logInDonor() {
    event.preventDefault()
    let logInDonor = {
        userName: user.val(),
        password: userPassword.val()
    }
    console.log(logInDonor)
    logIn(logInDonor)
};

function logIn(donorId) {
    $.post("/api/logIn", donorId, () => {
        
        window.location.href = "/donorHomePage"
    })
};