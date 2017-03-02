var arrayObject = [],
  separator = "",
  start = 0,
  end = 0,
  sortby = function(a,b){}
// 查找搜索

// 截取替换
  ( value ) arrayObject.pop(); // 删除并返回最后一个元素
  ( value ) arrayObject.shift(); // 删除并返回第一个元素
  ( length ) arrayObject.push([],[],[]); //末尾添加一个或多个元素，并返回新的长度
  ( length ) arrayObject.unshift(newelement1,newelement2,....,newelementX); // 开头添加一个或更多元素，并返回新的长度
  (new Array())arrayObject.slice(start,end); // 从已有的数组中返回选定的元素,可为负数
  arrayObject.splice(index,howmany,item1,.....,itemX);// 返回 被删除项目的新数组，如果有的话。
// 拼接
  (new Array()) arrayObject.concat(arrayX,arrayX,......,arrayX)
// 转换
  ( String ) arrayObject.join(separator); //把数组的所有元素放入一个字符串,使用separator分隔
  arrayObject.reverse(); // 颠倒数组中元素的顺序
  arrayObject.sort(sortby)

// 会对原来的数组进行操作,产生变化的有：
// pop，shift,push,unshift,splice，sort，reverse
// 对数组元素进行操作，但不会对原数组产生变换的有
// slice

// es5 新增方法

// forEach遍历
// [1,2,3].forEach(function(val,index,arr){},context)

