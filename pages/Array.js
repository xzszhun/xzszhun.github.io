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

// 检测是否是数组
Array.isArray()
instanceof 

// 转换为数组
Array.prototype.slice.call()
"".split(',')

// 实现栈
使用push()添加，使用pop()弹出
// 反向操作栈
  使用unshift添加，使用shift弹出
// 队列方法
使用push添加，使用shift()弹出。unshift弹出数组第一个元素

//反向操作队列
使用unshift添加，使用pop弹出
// 重排序
// sort默认升序，模式比较字符串 [0,1,5,10,15] ==> [0,1,10,15,5]。字符串是逐个字符进行比较，所以"5">"10"
sort(function(a,b){
  return a-b;// 0 不动，负值/false，则a在b前。相反b在a前
});
reverse(); // 反转顺序