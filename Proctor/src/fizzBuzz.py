def fizzBuzz(number):
	if (number % 15 == 0):
		return ('FizzBuzz')
	elif (number % 5 == 0):
		return ('Fizz')
	elif (number % 3 == 0):
		return ('Buzz')
	else:
		return number

print (fizzBuzz(31))