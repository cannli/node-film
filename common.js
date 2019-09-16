/**
 * 数组分割成多数组
 * @param  {[type]} array 要分割的数组
 * @param  {[type]} size  每个数组的个数
 * @return {[type]}       返回一个数组
 */
let chunk = function (array, size) {
  let [start, end, result] = [null, null, []];
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    start = i * size;
    end = start + size;
    result.push(array.slice(start, end));
  }
  return result;
};



// test
//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//console.log(chunk(arr, 4));

// 取出嵌套数组的所有成员
function* iterArr(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      yield* iterArr(arr[i]);
    };
  } else {
    yield arr;
  };
};

let arr = [ 'A', ['b', 'c'], ['d', 'e','a'] ];
for (let p of iterArr(arr)) {
  console.log(p);
};