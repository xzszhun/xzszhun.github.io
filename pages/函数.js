// 值传递
// 引用传递

// 关于函数传参
var person = {
  name:"参"
}
function fun(p){
  p.name = '王'
}
console.log(person.name);
fun(person);
console.log(person.name);

// 函数是按值传参的例子
var person = {
  name:"参"
}
function fun(p){
  p.name = "不该"
  p = {
    name:"该"
  }
}
console.log(person.name); // 参
fun(person)
console.log(person.name); // 不该

var closureFun = function(){
  var result = [],arr = [
    {a:{a:0}},{b:{b:0}},{c:{c:0}}
  ];
  for(var i = 0;i<3;i++){
    result[i] = (function(obj){
      return obj;
    })(o[i])
  }
  return result;
}

(function(){
  var name = "";
  Person = function(value){
    this._name = value;
    name = value;
  }
  Person.prototype.getName = function(){
    return name;
  }
  Person.prototype.setName = function(value){
    name = value
  }
  Person.prototype._setName = function(value){
    this._name = value;
  }
})()
var p1 = new Person("p1");
var p2 = new Person("p2");

var app = (function(){
  var name = "";
  return {
    getName:function(){
      return name;
    },
    setName:function(val){
      name = val;
    }
  }
})()