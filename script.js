var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];
var passwordlength, confirmnumber, confirmuppercase, confirmlowercase, confirmSpecial, confirmation;

function generatePassword() {
passwordlength =prompt("Choose password length (Enter a value between 8-128 characters).");
  if (!passwordlength) {
    alert("Please choose a value!")
} else if (passwordlength < 8 || passwordlength > 128) {
    confirmation = prompt("Choose password length (Enter a value between 8-128 characters).");
} else {
    confirmlowercase = confirm("Click ok to include lowercase characters?")
    confirmuppercase = confirm("Click ok to include uppercase characters?")
    confirmnumber = confirm("Click ok to include numbers?")
    confirmSpecial = confirm("Click ok to include special characters?")
};

var confirmation = [];

  if (confirmlowercase) {
    confirmation = confirmation.concat(lowerCase);
}
  else if (confirmuppercase) {
    confirmation = confirmation.concat(upperCase);
}
  if (confirmnumber) {
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
//   for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
var passwordLink=retAll.join("");

UserInput(passwordLink);

return retAll;
};

function UserInput(passwordLink) {
document.getElementById("password").textContent = passwordLink
};

generateBtn.addEventListener("click", function () {
generatePassword()
});
