  //bind HTML id
let loadDocument = document.getElementById("loadDocument");
//koppel eventlistener
loadDocument.addEventListener('click', ajax);
// ajax functie
function ajax() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "text_bestand.txt", true);
  xmlhttp.send();
}
