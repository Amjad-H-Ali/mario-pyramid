console.log('Mario');

// Generates Spaces
const spaces = (num) => {
	let space = "";

	for (let i = 0; i < num; i++) {

		space += " ";
	};

	return space;
};



// Generates Blocks
const blocks = (num) => {
	let blocks = "";

	for (let i = 0; i < num; i ++) {
		blocks += "#";
	};

	return blocks;
};


const pyramid = (num) => {

	for (let i = 1; i <= num; i ++) {

		console.log(`${spaces(num - i)}#`);

	};
};


pyramid(10);