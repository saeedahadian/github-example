// This is a test file for learning how to add a new file to a forked repository.

// By the way, I want to write a little bit of JavaScript!
// It's a function that finds all whether the input has the digit 5.

function findFive(num) {
	numstr = String(num); // Converting the number to a string
	
	result = false;
	
	for(let i = 0; i < numstr.length; i++) {
		if(Number(numstr[i]) === 5) {
			result = true;
			break;
		}
	}
	
	return result;
	}
	
