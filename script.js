// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialchar = "!@#$%^&*()".split("")
function generatePassword(){
  var userchoicearray = []
  var passwordlength = prompt("how long would you like your password to be?")
  // add if statement to double check the length of the password has to be 8 to 128
  console.log (passwordlength)
  if (passwordlength < 8 || passwordlength > 128){
    passwordlength = prompt("how long would you like your password to be?")
  }
  var uppercaseconfirm = prompt("would you like to add uppercase letters?")
  if(uppercaseconfirm === "yes"){
    userchoicearray = userchoicearray.concat(uppercase)
    console.log(userchoicearray)
  }
  else{
    alert("you selected to not have uppercase characters?")
  }
  // add else if the user says no to the prompt 
  var lowercaseconfirm = prompt("would you like to add lowercase letters?")
  if(lowercaseconfirm === "yes"){
    userchoicearray = userchoicearray.concat(lowercase)
    console.log(userchoicearray)
  }
    else{
      alert("you slected to not use lowercase charcter?")
    }
  // add else if the user says no to the prompt
  var numbersconfirm = prompt("would you like to add numbers letters?")
  if(numbersconfirm === "yes"){
    userchoicearray = userchoicearray.concat(numbers)
    console.log(userchoicearray)
  }
    else{
      alert("you selected to not use numbers?")
    }
  // add else if the user says no to the prompt
  var specialcharconfirm = prompt("would you like to add specialchar letters?")
  if(specialcharconfirm === "yes"){
    userchoicearray = userchoicearray.concat(specialchar)
    console.log(userchoicearray)
  }
    else{
      alert("you selected to not use special characters?")
    }
  // add else if the user says no to the prompt
  var result = ""
  for ( var i = 0; i < passwordlength; i++ ) {
    result += userchoicearray[(Math.floor(Math.random() * 
userchoicearray.length))];
 }
 return result; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
