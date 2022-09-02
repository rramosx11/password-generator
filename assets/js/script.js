// Assignment code here

// Variables

var characters = "";
var specialcharacters = "!@#$%^&*()";
var nbrcharacter = "0123456789";
var lowcharacter = "abcdefghijklmnopqrstuvwxyz";
var upcharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var result = "";
  var length = prompt(
    "How many characters would you like your password to contain?"
  );
  console.log(length);
  if (isNaN(length)) {
    alert("Make sure to enter a number variable!");
    return null;
  }

  if (length < 8 || (length > 128 && Number.isNaN(length))) {
    alert("Password must be between 8 and 128 characters");

    return generatePassword();
  }

  // criteria confirmations

  var lowercase = confirm("Click OK to confirm including lowercase characters");
  // console.log(lowercase);

  var uppercase = confirm("Click OK to confirm including uppercase characters");
  // console.log(uppercase);

  var numeric = confirm("Click OK to confirm including numeric characters");
  // console.log(numeric);

  var special = confirm("Click OK to confirm including special characters.");
  // console.log(special);

  if (lowercase) {
    characters += lowcharacter;
  }
  if (uppercase) {
    characters += upcharacter;
  }
  if (numeric) {
    characters += nbrcharacter;
  }
  if (special) {
    characters += specialcharacters;
  }
  if (!lowercase && !uppercase && !special && !numeric) {
    alert("Must select at least one character type!");
    return generatePassword();
  }
  var value = Math.floor(Math.random() * characters.length);
  console.log(characters.charAt(value));

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length + 1)
    );
    console.log(result);
  }

  // var passwordStr = "";
  // var randomValue = characters.charAt(value);
  // passwordStr += randomValue[i];
  // console.log(passwordStr);
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
