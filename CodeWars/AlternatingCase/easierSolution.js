String.prototype.toAlternatingCase = function (){
	return this.replace(/[a-zA-Z]/g, function(val) {
		return val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase();
	});
};

console.log('helLo wOrLd'.toAlternatingCase());

