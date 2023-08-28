// Assignment Code
var generateBtn = document.querySelector("#generate"); 
var lowerCaseArray=["a","b","c"                  ]
var upperCaseArray=['A','B','C'                   ]
var numbersArray=[0,1,2]
var specialArray=["!","@","#","%"                 ]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log('Hello Carlos, the red button was clicked. You see?');
  passwordText.value = password;

}

function generatePassword() {
  var pot=[]
  console.log('generatePassword function ran');
  // promp the user for the length of the password they want
  var passwordLength =parseInt( window.prompt("How long do you want your password? Select between 8 and 128 characters."));
  console.log('User selected the number ', passwordLength);
  // compare the value of passwordLength to ensure the value is between 8 and 128
  // i.e. if the passwordLength is greater than 128 OR the passwordLength is less than 8
  // then cancel the rest of the code execution.
  if (passwordLength > 128 || passwordLength < 8) {
    window.alert("please select a number between 8 and 128");
    return null;
  }
  //console.log("This line only prints to the console if the number is between 8 and 128");
  // for character types, use window.confirm instead of window.prompt
  var wantsLowercaseLetters = window.confirm("Do you want lowercase letters in your password?");
  var wantsUppercaseLetters = window.confirm("Do you want uppercase letters in your password?");
  var wantsnumbers = window.confirm("Do you want numbers in your password?");
  var wantsspecialcharacters = window.confirm("Do you want special characters in your password?");
  console.log('User selected', wantsLowercaseLetters, 'to lowercase letters');
  // with the user answer stored in the variable, define an array which will hold the
  // letters that the user has allowed in the password 
  
if(wantsLowercaseLetters===true){
pot=pot.concat(lowerCaseArray)
}

if(wantsUppercaseLetters===true){
  pot=pot.concat(upperCaseArray)
}
if(wantsnumbers===true){
  pot=pot.concat(numbersArrayArray)
}
if(wantsspecialcharacters===true){
  pot=pot.concat(specialArrayArray)
}




}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
