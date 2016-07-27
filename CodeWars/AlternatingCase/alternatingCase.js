String.prototype.toAlternatingCase = function (){
	newString = [];

	for (i = 0; i < this.length; i++) {

		if (this[i].charCodeAt() >= 65 && this[i].charCodeAt() <= 90){
			// if capital letter
			newString.push(this[i].toLowerCase());
			// else if small letter
		} else if (this[i].charCodeAt() >= 97 && this[i].charCodeAt() <= 122){
			newString.push(this[i].toUpperCase());
			//else if non-word character
		} else {

			newString.push(this[i]);
		}

	}
	return newString.join('');
};

