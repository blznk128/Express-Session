$(document).ready(function() {
    M.updateTextFields();
  });

const user_Name = $("#userName")
const firstName = $("#first_name")
const lastName = $("#last_name")
const userPassword = $("#password")
const userEmail = $("#email")

function submitInfo() {
  event.preventDefault()
  let newDonor = {
    first_Name: firstName.val(),
    userName: user_Name.val(),
    last_Name: lastName.val(),
    password: userPassword.val(),
    email: userEmail.val()
  }
    console.log(newDonor)
    addDonor(newDonor)
    window.location.href = "/donorLogin"

}

function addDonor(donorRegistrar) {
  $.post("/api/newDonor", donorRegistrar, () => {
  })
}