/*
Descriptions:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

*/

//Solutions:
function toCamelCase(str){
  var strCamelCase = '';
  for(var i=0; i < str.length; i++){
    let elem = str[i];
    if(elem === '-' || elem ==='_'){
      strCamelCase += str[i+1].toUpperCase();
      i++;
    }
    else{
      strCamelCase +=elem;
      };
  }
  return strCamelCase;
}
