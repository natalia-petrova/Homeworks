//first task

for (let i=1; i <= 5; i++) {

    console.log(i);

}

let index = 0;
message = '';

//second task

for (let i=0; i <= 5; i++) {

    for (let j = 0; j < index; j++) {

        message = message + index + '';
    }

    console.log(message);
    index++; 
    message = '';

}

// third task

var m = 4;
var n = 4;
var board = [
    [1,2,3,4],
	[12,13,14,5],
	[11,16,15,6],
	[10,9,8,7],
];

var result = [];
var dir = 'right';
var imin = 0;
var imax = m - 1;
var jmin = 0;
var jmax = n - 1

var i = imin;
var j = jmin;
var done = false;

arr = [
	[1,2,3,4],
	[12,13,14,5],
	[11,16,15,6],
	[10,9,8,7],
];


function rotate(arr) {
	copy = [];

	rows = arr.length;
	for(i = 0; i < rows; i++) {
		cols = arr[i].length;
		for(j = 0; j < cols; j++) {
			if(copy[cols - 1 - j] === undefined) copy[cols - 1 - j] = [];
			copy[cols - 1 - j][i] = arr[i][j];
		}
	}

	return copy;
}

res = [];
do {
	res = res.concat(arr.shift());
	arr = rotate(arr);
} while(arr.length);

console.log(res);