import _Set from 'babel-runtime/core-js/set';
import _Array$of from 'babel-runtime/core-js/array/of';
var arr = ['a', 'b', 'c', 'd'];
arr.map(function (i, v) {
	console.log(i + '==>' + v);
});

var index = arr.findIndex(function (v) {
	return v == 'c';
});
console.log(arr.includes('d'));

var arr1 = _Array$of(3);

var set = new _Set(arr);

// var fi = Array.findIndex(arr, v => v==='b');

_Array$of(undefined);

console.log(arr.findIndex);
