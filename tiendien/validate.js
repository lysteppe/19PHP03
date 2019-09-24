function validateForm() {
  var x = document.forms["info"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}