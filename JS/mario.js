console.log('Mario');

const spaces = (num) => {
	let space = "";

	for (let i = 0; i < num; i++) {

		space += " ";
	}

	return space;
};

console.log(`Hello,${spaces(5)}World!`);