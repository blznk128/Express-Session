$(document).ready(function() {
    M.updateTextFields();
  });

const user_Name = $("#userName")
const npWebsite = $("#website")
const npName = $("#nonProfitName")
const userPassword = $("#password")
const npProof = $("#proof")
const npLogo = $("#logoLink")
const npHQ = $("#hqAddress")
const npEmail = $("#email")
const npPhone = $("#phone")
const aboutNonProfit =$("#aboutNP")


function submitInfo() {
  event.preventDefault()
  let newNonProfit = {
    userName: user_Name.val(),
    website: npWebsite.val(),
    nonProfitName: npName.val(),
    password: userPassword.val(),
    proof: npProof.val(),
    logoLink: npLogo.val(),
    hqAddress: npHQ.val(),
    email: npEmail.val(),
    phone: npPhone.val(),
    aboutMe: aboutNonProfit.val()
  }
    console.log(newNonProfit)
    addNP(newNonProfit)
    window.location.href = "/nonProfitLogin"

}

function addNP(nonProfitRegistrar) {
  $.post("/api/newNonProfit", nonProfitRegistrar, () => {
  })
}
