// 在es5中，使用函数function进行作用域的划分。es6中，使用let，const可以实现根据{}块来决定变量作用域
// 作用域 统分的话就两种：全局作用域，局部作用域
// 作用域链：找变量
// 原型链：找属性
// 当执行代码时，变量会首先从函数上下文中进行查找，当查找不到时，便会到上一级的作用域中继续查找，直到找到相应变量值，或到顶层作用域。

// 作用域提升
// with，try
var person={name:"yhb",age:22,height:175,wife:{name:"lwy",age:21}};  
with(person.wife){
    console.log(name);  
}
