// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define my arrays for Characters
var includeLowercase = true;
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var includeUppercase = true;
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeNumbers = true;
var numberChars = "0123456789";
var includeSpecialChars = true;
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

//Function to generate random character from my array
function getRandomCharacter(charArray) {
  var randomIndex = Math.floor(Math.random() * charArray.length);
  return charArray[randomIndex];
}

//Function to generate random password
function generatePassword(length) {
  var password = "";
  var allChars = "";

  //Add characters to 'allChars' string
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSpecialChars) allChars += specialChars;

  if (allChars === "") {
    alert("Please select at least one character set");
    return "";
  }

  for (var i = 0; i < length; i++) {
    password += getRandomCharacter(allChars);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  var passwordLength = parseInt(
    prompt("Enter the password length (between 8 and 128 characters):")
  );
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    var password = generatePassword(passwordLength);
    if (password !== "") {
      document.getElementById("password").value = password;
    }
  } else {
    alert("Please enter a valid password length between 8 and 128.");
  }
});
