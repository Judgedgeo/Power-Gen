var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var passwordlength, confirmNumber, confirmUppercase, confirmlowercase, confirmSpecial, confirmation;

function generatePassword() {
  passwordlength = prompt("Choose password length (Enter a value between 8-128 characters).");
  if (!passwordlength) {
    alert("Please choose a value!")
  } else if (passwordlength < 8 || passwordlength > 128) {
    confirmation = prompt("Choose password length (Enter a value between 8-128 characters).");
  } else {
    confirmLowercase = confirm("Click ok to include Lowercase characters?")
    confirmUppercase = confirm("Click ok to include Uppercase characters?")
    confirmNumber = confirm("Click ok to include Numbers?")
    confirmSpecial = confirm("Click ok to include Special Characters?")
  };

  var confirmation = [];

  if (confirmLowercase) {
    confirmation = confirmation.concat(lowerCase);
  }
  else if (confirmUppercase) {
    confirmation = confirmation.concat(upperCase);
  }
  if (confirmNumber) {
    confirmation = confirmation.concat(numbers);
  }
  else if (confirmSpecial) {
    confirmation = confirmation.concat(special);
  }

  var retAll = [];

  for (var i = 0; i < passwordlength; i++) {
    var truePassword = confirmation[Math.floor(Math.random() * confirmation.length)];
    retAll.push(truePassword);
  }

  var passwordLink = retAll.join("");

  UserInput(passwordLink);

  return retAll;
};

function UserInput(passwordLink) {
  document.getElementById("password").textContent = passwordLink
};

generateBtn.addEventListener("click", function () {
  generatePassword()
});
