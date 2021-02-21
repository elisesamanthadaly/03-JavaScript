// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() { //Ed's code starts here
    //Initial prompt for length choice
    var lengthChoice = prompt("How many characters would you like your password to contain? Please input a value between 8 and 128, using numeric characters.");

    //Repeats length prompt if user selects an invalid option (cancel, non-numeric input, out-of-range input)
    while (lengthChoice === null || isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
      if (lengthChoice === null) {
        alert("Please input a password length.");
      }
      else if (isNaN(lengthChoice)) {
        alert("Please input a password length using numeric characters.");
      }
      else {
        alert("Please input a value between 8 and 128 for password length.")
      }

      var lengthChoice = prompt("How many characters would you like your password to contain? Please input a value between 8 and 128, using numeric characters.");
    }

    //Prompts for character set options
    var lowercaseChoice = confirm("Would you like your password to possibly contain lowercase characters? Select OK for yes, Cancel for no.");
    var uppercaseChoice = confirm("Would you like your password to possibly contain uppercase characters? Select OK for yes, Cancel for no.");
    var numericChoice = confirm("Would you like your password to possibly contain numeric characters? Select OK for yes, Cancel for no.");
    var specialChoice = confirm("Would you like your password to possibly contain special characters? Select OK for yes, Cancel for no.");

    //Repeats character set prompts if user doesn't select at least one
    while (lowercaseChoice === false && uppercaseChoice === false && numericChoice === false && specialChoice === false) {
      alert("Your password must contain at least one set of characters. Please choose again.");
      var lowercaseChoice = confirm("Would you like your password to possibly contain lowercase characters? Select OK for yes, Cancel for no.");
      var uppercaseChoice = confirm("Would you like your password to possibly contain uppercase characters? Select OK for yes, Cancel for no.");
      var numericChoice = confirm("Would you like your password to possibly contain numeric characters? Select OK for yes, Cancel for no.");
      var specialChoice = confirm("Would you like your password to possibly contain special characters? Select OK for yes, Cancel for no.");
    }

    //Populates user-selected character sets. Nonchosen sets are set to empty strings
    if (lowercaseChoice) {
      var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    }
    else {
      var lowercaseSet = "";
    }

    if (uppercaseChoice) {
      var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else {
      var uppercaseSet = "";
    }

    if (numericChoice) {
      var numericSet = "0123456789";
    }
    else {
      var numericSet = "";
    }

    if (specialChoice) {
      var specialSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    else {
      var specialSet = "";
    }

    //Final character set is a combination of the four individual sets
    var characterSet = (lowercaseSet + uppercaseSet + numericSet + specialSet);

    //Builds a random string of text as long as the user's length choice from the characters in the final character set
    var i;
    var randomText = "";
    for (i = 0; i < lengthChoice; i++) {
      randomText = randomText + characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return randomText;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);