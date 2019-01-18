function log(clog) {
	console.log(clog);
}


/*	关键点：
*	typeof instanceof constructor indexOf toString
*	for..in.. === NaN !== NaN
* 	JSON.stringify JSON.parse
*/ 
var isArray = function(arr) {
	return arr instanceof Array;
}
function forEach(arr, fn) {
	for(var i = 0, len = arr.length; i < len; i++) {
		fn(arr[i], i, arr);
	}
}
function find(arr, fn) {
	var fValue = false;
	for(var i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			fValue = arr[i];
			break;
		}
	}
	return fValue;
}
function findIndex(arr, fn) {
	var fIndex = false;
	for(var i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			fIndex = i;
			break;
		}
	}
	return fIndex;
}
function filter(arr, fn) {
	var filterResult = [];
	for(var i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			filterResult.push(arr[i]);
		}
	}
	return filterResult;
}
var some = function(arr, fn) {
	var someTrue = false;
	for(var i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			someTrue = true;
			break;
		}
	}
	return someTrue;
}
var every = function(arr, fn) {
	var everyTrue = true;
	for(var i = 0, len = arr.length; i < len; i++) {
		if(!fn(arr[i], i, arr)) {
			everyTrue = false;
			break;
		}
	}
	return everyTrue;
}
var map = function(arr, fn) {
	var mapResult = [];
	for(var i = 0, len = arr.length; i < len; i++) {
		mapResult.push(fn(arr[i], i, arr));
	}
	return mapResult;
}

var ages = [3, 10, 18, 20];
// function checkAdult(age) {
//     return age >= 2 && age < 20;
// }
 
// forEach(ages, function(v, i) {
// 	log(i + '==>' + v);
// })
// log(find(ages, checkAdult));
// log(findIndex(ages, checkAdult));
// log(filter(ages, checkAdult));
// log(some(ages, checkAdult));
// log(every(ages, checkAdult));
// log(map(ages, function(v, i) {
// 	return v * i;
// }))
var keys = function(arrOrObj, fn) {
	var keysResult = [];
	if(arrOrObj instanceof Array) {
		for(var i = 0, len = arrOrObj.length; i < len; i++) {
			keysResult.push(i);
		}
	}else{
		for(var keys in obj) {
			keysResult.push(keys);
		}
	}
	return keysResult;
}
var values = function(arrOrObj, fn) {
	var valuesResult = [];
	if(arrOrObj instanceof Array) {
		for(var i = 0, len = arrOrObj.length; i < len; i++) {
			valuesResult.push(arrOrObj[i]);
		}
	}else{
		for(var keys in obj) {
			valuesResult.push(arrOrObj[keys]);
		}
	}
	return valuesResult;
}
var entries = function(arrOrObj, fn) {
	var entriesResult = [];
	if(arrOrObj instanceof Array) {
		for(var i = 0, len = arrOrObj.length; i < len; i++) {
			entriesResult.push([i, arrOrObj[i]]);
		}
	}else{
		for(var keys in obj) {
			entriesResult.push([keys, arrOrObj[keys]]);
		}
	}
	
	return entriesResult;
}
var reduce = function(arr, fn, result) {
	for(var i = 0, len = arr.length; i < len; i++) {
		fn(result, arr[i]);
	}
	return result;
}
// var objKeys = function(obj, fn) {
// 	var objKeysResult = [];
// 	for(var keys in obj) {
// 		objKeysResult.push(keys);
// 	}
// 	return objKeysResult;
// }
// var objValues = function(obj, fn) {
// 	var objValuesResult = [];
// 	for(var keys in obj) {
// 		objValuesResult.push(obj[keys]);
// 	}
// 	return objValuesResult;
// }
// var objEntries = function(obj, fn) {
// 	var objEntriesResult = [];
// 	for(var keys in obj) {
// 		objEntriesResult.push([keys, obj[keys]]);
// 	}
// 	return objEntriesResult;
// }
var obj = {a: 'a1', b: 'b1', c: 'c1'};


var aObj = {a: 'a'};
var bObj = {b: 'b'};
var arr = [aObj, bObj, undefined, null, aObj, bObj, '', ' ','1', 2, undefined, null, 'a', 'b', 1, '2', 2, 'c', 1, 2, 'NaN' ,NaN, NaN, new Date(), [1], [1,2], {a: 'a'}, {b:'b'}];




// 利用indexOf
function uniq(arr) {
	var uniqResult = [];
	var hasNaN = false;
	for(var i = 0, len = arr.length; i < len; i++) {
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
// log(uniq(arr));

// 利用indexOf
// 通过数组对象的某个key值判断是否唯一，key值最好为数字或字符串
var arrObj = [{id: NaN, name: 'NaN'},{id: NaN, name: 'a'},{id: 1, name: 'a'}, {id: '1', name: 'b'}, {id: 'c', name: 'c'}, {id: 'a', title: 'a'}, {id: 'b', title: 'b'}, {id: 'c', title: 'c'}];
function uniqBy(arrObj, key) {
	var uniqResult = [];
	var keyArr = [];
	var hasNaN = false;
	for(var i = 0, len = arrObj.length; i < len; i++) {
		if(arrObj[i][key] !== undefined && keyArr.indexOf(arrObj[i][key]) === -1) {
			if(arrObj[i][key] !== arrObj[i][key]) {
				if(!hasNaN) {
					hasNaN = true;
					uniqResult.push(arrObj[i]);
				}
			}else{
				keyArr.push(arrObj[i][key]);
				uniqResult.push(arrObj[i]);
			}
		}
	}
	return uniqResult;
}
// log(uniqBy(arrObj, 'id'));


var objects = [{ 'x': 1.2, 'y': 2 }, { 'x': 2.3, 'y': 1 }, { 'x': 1.8, 'y': 2 }, { 'x': 0.8, 'y': 1 }, { 'x': 1.1, 'y': 2 }];
function uniqWith(arrObj, fn) {
	var len = arrObj.length;
	var uniqResult = [];
	for(var i = 0; i < len; i++) {
		var uniqBoolean = true;
		for(var j = 0; j < uniqResult.length; j++) {
			if(fn(arrObj[i], uniqResult[j])) {
				uniqBoolean = false;
				break;
			}
		}
		if(uniqBoolean) {
			uniqResult.push(arrObj[i]);
		}
	}
	return uniqResult;
}
var uniqWithResult = uniqWith(objects, mathFloor);
function mathFloor(o1, o2) {
	return Math.floor(o1.x) === Math.floor(o2.x);
}
// log(uniqWithResult);


function difference(arr1, arr2) {
	var diffResult = [];
	for(var i = 0, len1 = arr1.length; i < len1; i++) {
		var diffBoolean = true;
		for(var j = 0, len2 = arr2.length; j < len2; j++) {
			if((arr1[i] !== arr1[i] && arr2[j] !== arr2[j]) || arr1[i] === arr2[j]) {
				diffBoolean = false;
				break;
			}
		}
		if(diffBoolean) {
			diffResult.push(arr1[i]);
		}
	}
	return diffResult;
}
var a = {}, b = {};
var arr1 = [1, {a: 'a'}, a, b,[], [], 'a', 'b', '1', null, undefined, false, true, NaN, NaN, NaN]; 
var arr2 = [null, NaN, 'a', '1', a, b, undefined, false];
// log(difference(arr1, arr2));


function differenceBy(arrObj1, arrObj2, key) {
	var diffResult = [];
	var arrObj2Keys = [];
	for(var j = 0, len2 = arrObj2.length; j < len2; j++) {
		arrObj2Keys.push(arrObj2[j][key]);
	}
	for(var i = 0, len1 = arrObj1.length; i < len1; i++) {
		if(arrObj2Keys.indexOf(arrObj1[i][key]) == -1) {
			diffResult.push(arrObj1[i]);
		}
	}
	return diffResult;
}
var diffByArr1 = [{id: '1', name: 'Tom'}, {id: '2', name: 'Hailey'}, {id: '3', name: 'Bright'}];
var diffByArr2 = [{id: '1', name: '1'}, {id: '1', name: 'Tom'}, {id: '5', name: '123456'}];
// log(differenceBy(diffByArr1, diffByArr2, 'id'));
// log(differenceBy(diffByArr1, diffByArr2, 'name'));


var diffWithArr1 = [{id: '1.2', name: 'Tom'}, {id: '2.1', name: 'Hailey'}, {id: '3.9', name: 'Bright'}];
var diffWithArr2 = [{id: '3.9', name: 'Bright'}, {id: '1.2', name: 'Tom'}, {id: '5', name: '123456'}];
function differenceWith(arrObj1, arrObj2, fn) {
	var diffResult = [];
	for(var i = 0, len1 = arrObj1.length; i < len1; i++) {
		var diffBoolean = true;
		for(var j = 0, len2 = arrObj2.length; j < len2; j++) {
			if(fn(arrObj1[i], arrObj2[j])) {
				diffBoolean = false;
				break;
			}
		}
		if(diffBoolean) {
			diffResult.push(arrObj1[i]);
		}
	}
	return diffResult;
}
function mathFloorId(o1, o2) {
	return Math.floor(o1.id) === Math.floor(o2.id);
}
function startWith(o1, o2) {
	return (/^Tom/i.test(o1.name)&&/^Tom/i.test(o2.name));
}
// log(differenceWith(diffWithArr1, diffWithArr2, mathFloorId));
// log(differenceWith(diffWithArr1, diffWithArr2, startWith));
// log(differenceWith(diffWithArr1, diffWithArr2, isEqual));



// 复杂类型只考虑Boolean, Number, String, Object, Array
// new Boolean()的返回值是一个对象，Boolean(new Boolean())这个为真
// 判断new Boolean(bool)的真假 ==> new Boolean(bool).toString() ==> 转化为字符串类型


// 判断Object的缺陷：
// 1、key==>value中的value不能是NaN，也就是不能区分null和NaN
// 2、key==>value中的value不能是undefined，否则不比较当前的键值
function isEqual(e1, e2) {
	var typeofE1 = typeof e1;
	var typeofE2 = typeof e2;
	if(e1 === e2) {
		log('===');
		return true;
	}else{
		if(e1 !== e1 || e2 !== e2){
			log('NaN:');
			return (e1 !== e1 && e2 !== e2);
		}else if(e1 === null || e2 === null || typeofE1 === 'function' || typeofE2 === 'function'){
			log('null || function:');
			return false;
		}else if(typeofE1 === 'object' && typeofE2 === 'object') { // 不存在null, NaN, function，并且两个都是复杂类型
			if(e1 instanceof Array && e2 instanceof Array){
				if(e1.length !== e2.length || JSON.stringify(e1) !== JSON.stringify(e2)) { // 粗略判断检验
					log('粗略判断检验:');
					return false;
				}else{
					var arrEqual = true;
					for(var i = 0, len = e1.length; i < len; i++) {
						if(!isEqual(e1[i], e2[i])) {
							arrEqual = false;
							break;
						}
					}
					log('Array:');
					return arrEqual;
				}
			}else if(e1.constructor === Object && e2.constructor === Object) {
				log('Object判断：（不能辨别null和NaN）');
				return JSON.stringify(e1) === JSON.stringify(e2);
			}else if(e1 instanceof Number && e2 instanceof Number) {
				log('Number:');
				return Number(e1) === Number(e2);
			}else if(e1 instanceof String && e2 instanceof String) {
				log('String:');
				return String(e1) === String(e2);
			}else if(e1 instanceof Boolean && e2 instanceof Boolean) {
				log('Boolean:');
				return e1.toString() === e2.toString();
			}else{
				log('非数组、Object、Number、String、Boolean的判断:');
				return false;
			}
		}else{ // 不存在null, NaN, function，并且一个是简单类型，一个是复杂类型
			var e1isObj = typeof e1 === 'object';
			var e2isObj = typeof e2 === 'object';
			var E1, E2;
			if(e1 instanceof Number || e2 instanceof Number) {
				log('Number:');
				E1 = e1isObj ? Number(e1) : e1;
				E2 = e2isObj ? Number(e2) : e2;
				return E1 === E2;
			}else if(e1 instanceof String || e2 instanceof String) {
				log('String:');
				E1 = e1isObj ? String(e1) : e1;
				E2 = e2isObj ? String(e2) : e2;
				return E1 === E2;
			}else if(e1 instanceof Boolean) {
				log('e1 is Boolean Object:');
				return (typeof e2 === 'boolean') && e1.toString() === e2.toString();
			}else if(e2 instanceof Boolean) {
				log('e2 is Boolean Object:');
				return (typeof e1 === 'boolean') && e1.toString() === e2.toString();
			}else{
				log('简单类型和复杂类型的比较:');
				return false;
			}
		}
	}
}

// log(isEqual(new Boolean(), new Boolean(2)));
// log(isEqual({a: undefined}, {a: NaN}));
// log(isEqual([null, undefined, NaN, false, new Boolean(), true, new Boolean(1)], [null, undefined, NaN, false, new Boolean(), true, new Boolean(1)]));
// log(isEqual([{a: null}, {b: +0}], [{a: NaN}, {b: -0}]));
// log(isEqual([{a: null}, {b: +0}], [{a: NaN}, {b: -0}]));

var arrObj = [{id: 1, value: 'a'}, {id: 10, value: 'b'}, {id: 111, value: 'c'}, {id: 21, value: 'd'}, {id: 41, value: 'd'}];
var kpTimes = 0;
var sortWith = function(arrObj, key) {
    if(arrObj.length <= 1) {
        return arrObj;
    }
　　var minIndexVal = arrObj.pop();// 数组的最后一个
    var leftArr = [];
    var rightArr = [];
    for(var i = 0; i < arrObj.length; i++) {
        if(parseInt(arrObj[i][key]) > parseInt(minIndexVal[key])) {
            rightArr.push(arrObj[i]);
        }else{
            leftArr.push(arrObj[i]);
        }
        kpTimes++;
    }
    return sortWith(leftArr, key).concat([minIndexVal],sortWith(rightArr, key));
}
// console.log(sortWith(arrObj, 'id'),kpTimes);


function passwordTest(pw) {
	var validate = true;
	if(pw.length < 10) {
		console.log('密码长度不能小于10位！');
		validate = false;
	}else if(!(/[a-z]+/.test(pw) && /[A-Z]+/.test(pw) && /[0-9]+/.test(pw) && /!|@|#|\$|%|\^|&|\*/.test(pw))) {
		console.log('密码必须包含数字、大小写字母和特殊字符！');
		validate = false;
	}
	return validate;
}
// console.log(passwordTest('abcabcabcabc1$A'));



/*
*	arr：操作的原数组(该方法直接操作原数组，不想操作原数组改用filter方法)
*	fn：function(value, index) {} ==> 从数组的某个索引开始操作可通过index判断
*	return: array==> if(origin == false) { return 被remove的对象 } else { return 被remove后的原数组 }
*/ 
var remove = function(arr, fn, origin) {
	var removeResult = [];
	for(var i = 0; i < arr.length; i++) {
		if(fn(arr[i], i)) {
			removeResult.push(arr[i]);
			arr.splice(i--, 1); // 操作原数组，并且i-1重新循环改位置的判断
		}
	}
	return originArr ? arr : removeResult;
};
var arr3 = [1, 11, 2, 2, 4, 6, 6, 7, 8, 9, 0];
console.log(remove(arr3, function(value, index) {
	return index > 3 && value % 2 == 0;
}, true));
console.log(arr3);

