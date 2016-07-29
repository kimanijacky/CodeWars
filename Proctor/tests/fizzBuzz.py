describe("FizzBuzz tests", function() {
	it("should return 'Fizz' for number divisible by 3", function() {
		expect(fizzBuzz(3).toBe('Fizz'));
	});

	it("should return 'Buzz' for number divisible by 5", function() {
		expect(fizzBuzz(5).toBe('Buzz'));
	});

	it("should return 'FizzBuzz' for number divisible by 15", function() {
		expect(fizzBuzz(3).toBe('FizzBuzz'));
	});

	it("should return 'FizzBuzz' for number divisible by 45", function() {
		expect(fizzBuzz(45).toBe('FizzBuzz'));
	});

	it("should return 7 for number divisible by 7", function() {
		expect(fizzBuzz(7).toBe(7));
	});

});