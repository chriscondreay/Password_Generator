// Assignment Code
let generateBtn = document.querySelector("#generate");
let choices = []; // Create empty array for later concatting
let choicesObj = {
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  specChars: [".", "!", "'", "@", "#", "$", "%", "^", "&", "{", "}", "?", ",", "<", ">", "/", '{', "[", "]", "(", ")", ":", ";", "~"],
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// create function called generatePassword()
function generatePassword() {
  let input = prompt("How long would you like your password to be? Choose between 8 to 128 characters.")

  // If the input is in range of characters, go ahead and confirm choices
  if (input >= 8 && input <= 128) {
    upperCase = confirm("Would like upperCase letters?");
    lowerCase = confirm("Would like lowerCase letters?");
    numbers = confirm("Would like numbers?");
    specChars = confirm("Would like special characters?");
  }
  else {
    alert("Invalid Input!")
  }
  
  // If choices are selected, concat choices selected
  if (upperCase) {
      choices = choices.concat(choicesObj.upperCase);
    }  if (lowerCase) {
      choices = choices.concat(choicesObj.lowerCase)
    }  if (numbers) {
      choices = choices.concat(choicesObj.numbers)
    }  if (specChars) {
      choices = choices.concat(choicesObj.specChars)
    }

    let password = "";
    for (let i = 0; i < input; i++) {
      password +=  choices[Math.floor(Math.random() * choices.length)];
    }
    console.log(password);
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
