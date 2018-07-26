console.log('Mario');

// Generates Spaces
const spaces = (num) => {
	let space = "";

	for (let i = 0; i < num; i++) {

		space += " ";
	}

	return space;
};

console.log(`Hello,${spaces(5)}World!`);

// Generates Blocks
const blocks = (num) => {
	let blocks = "";

	for (let i = 0; i < num; i ++) {
		blocks += "#";
	}

	return blocks;
};

console.log(blocks(5));