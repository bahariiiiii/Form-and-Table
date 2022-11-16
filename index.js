let x = 1;

document.getElementById("submit").onclick = function() {
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");

  var row = table.insertRow(-1);
  var number = row.insertCell(0);
  var firstName = row.insertCell(1);
  var lastName = row.insertCell(2);
  var gender = row.insertCell(3);
  var city = row.insertCell(4);
  var birthday = row.insertCell(5);

  number.innerHTML = x++;
  firstName.innerHTML = document.getElementById("first-name").value;
  lastName.innerHTML = document.getElementById("last-name").value;
  gender.innerHTML = document.getElementById("select-gender").value;
  city.innerHTML = document.getElementById("city").value;
  birthday.innerHTML = document.getElementById("birthday").value;

  document.getElementById("form-submission").reset();
  return false;
}
