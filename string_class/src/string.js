//return true if string contains vowels
String.prototype.hasVowels = function() {
  var result = (/([aAeEiIoOuU])\w/g).test(this);
  return result;
};

//returns true if string ends with a question mark
String.prototype.isQuestion = function() {
  var question = /[?]$/.test(this);
  return question;
};

//returns list of words in the string as an array
var wordsArray;
String.prototype.words = function() {
  wordsArray = this.replace(/\W+/g, ' ').trim().split(' ');
  return wordsArray;
};

//returns the number of words in the string
String.prototype.wordCount = function() {
  return (this.words()).length;
};

//returns currency representation of the string
String.prototype.toCurrency = function() {
  return parseInt(this).toFixed().toLocaleString();
};

//returns a number representation from the currency string
String.prototype.fromCurrency = function() {
  var integer = this.replace(/,/g, '');
  return parseInt(integer).toFixed(2).toString();
};
