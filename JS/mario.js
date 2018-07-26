console.log('Mario');

const input = prompt();


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

// Contructs Pyramids
const pyramid = (num) => {

	// Rows
	for (let i = 1; i <= num; i ++) {

		console.log(`${spaces(num - i)}`,`${blocks(i)}`,`${spaces(2)}`,`${blocks(i)}`);

	};
};


pyramid(input);