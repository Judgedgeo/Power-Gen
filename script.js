var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var passwordlength, confirmnumber, confirmuppercase, confirmlowercase, confirmSpecial, confirmation;

function generatePassword() {
passwordlength =prompt("Choose password length (Enter a value between 8-128 characters).")
  if(!passwordlength) {
    alert("Please choose a value!")
} else if(passwordlength < 8 || passwordlength > 128) {
    confirmation = prompt("Choose password length (Enter a value between 8-128 characters).");
} else {
    confirmlowercase = confirm("Would you like lowercase characters?")
    confirmuppercase = confirm("Would you like uppercase characters?")
    confirmnumber = confirm("Would you like numbers?")
    confirmSpecial = confirm("Would you like special characters?")
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

var passwordLink=retAll.join("");
UserInput(passwordLink);

return retAll;
};

function UserInput(passwordLink) {
document.getElementById("password").textContent = passwordLink
}

generateBtn.addEventListener("click", function () {
generatePassword()
});
