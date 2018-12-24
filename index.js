var aObj = {a: 'a'};
var bObj = {b: 'b'};
var arr = [aObj, bObj, undefined, null, aObj, bObj, '', ' ','1', 2, undefined, null, 'a', 'b', 1, '2', 2, 'c', 1, 2, 'NaN' ,NaN, NaN, new Date(), [1], [1,2], {a: 'a'}, {b:'b'}];
// 利用indexOf
function indexOfUniq(arr) {
	var len = arr.length;
	var uniqResult = [];
	var hasNaN = false;
	for(var i = 0; i < len; i++) {
		if(arr[i] !== arr[i]) {
			if(!hasNaN) {
				hasNaN = true;
				uniqResult.push(NaN);
			}
		}else if(uniqResult.indexOf(arr[i]) === -1) {
			uniqResult.push(arr[i]);
		}
	}
	return uniqResult;
}
// console.log(indexOfUniq(arr));
// 利用Object的属性判断
// 缺陷：不能判断引用类型，不能区分NaN和'NaN'
Array.prototype.unique = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}
// console.log(arr.unique());


// 利用indexOf
// 通过数组对象的某个key值判断是否唯一，key值最好为数字或字符串
var arrObj = [{id: 1, name: 'a'}, {id: '1', name: 'b'}, {id: 'c', name: 'c'}, {id: 'a', title: 'a'}, {id: 'b', title: 'b'}, {id: 'c', title: 'c'}];
function arrObjUniqBy(arrObj, key) {
	var len = arrObj.length;
	var uniqResult = [];
	var keyArr = [];
	for(var i = 0; i < len; i++) {
		if(keyArr.indexOf(arrObj[i][key]) === -1 && arrObj[i][key]) {
			keyArr.push(arrObj[i][key]);
			uniqResult.push(arrObj[i]);
		}
	}
	return uniqResult;
}
console.log(arrObjUniqBy(arrObj, 'id'));



var objects = [{ 'x': 1.2, 'y': 2 }, { 'x': 2.3, 'y': 1 }, { 'x': 1.8, 'y': 2 }, { 'x': 0.8, 'y': 1 }];
function arrObjUniqWith(arrObj, fn) {
	var len = arrObj.length;
	var uniqResult = [];
	for(var i = 0; i < len; i++) {
		if(fn(arrObj[i][key], uniqResult)) {
			uniqResult.push(arrObj[i]);
		}
	}
	return uniqResult;
}
arrObjUniqWith(objects, function(o){
	return Math.floor()
});


