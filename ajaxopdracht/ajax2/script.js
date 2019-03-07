//bind HTML id
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let email = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let responseHere = document.getElementById("responseHere");
//click event listener
submitButton.addEventListener('click', ajax);
// ajax functie
function ajax() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseHere.innerHTML = this.responseText;
    }
  };
  let httpString = "form_1.php?firstName=" + firstName.value + "&lastName=" + lastName.value + "&age=" + age.value + "&email=" + email.value;

  // debuggen, laat de http string zien
  console.log(httpString);

  // Ajax actie voorbereiden
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send(); //voer uit
}
