var arr = ['a', 'b', 'c', 'd'];
arr.map((i, v) => {
	console.log(i + '==>' + v);
})

var index = arr.findIndex((v)=>{
	return v == 'c';
})
console.log(arr.includes('d'));

var arr1 = Array.of(3);

var set = new Set(arr);


// var fi = Array.findIndex(arr, v => v==='b');

Array.of(undefined);

console.log(arr.findIndex);