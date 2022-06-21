// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordArr = []; // Create empty array for later concatting
let passwordObj = {
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  specChars: [".", "!", "'", "@", "#", "$", "%", "^", "&", ")", "?", ",", "<", ">", "/", '{', "[", ")", ":", ";", "~"],
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// create function called generatePassword()
function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
