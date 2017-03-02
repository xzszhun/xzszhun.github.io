// 单例模式
var Singleton = {
  name: "",
  method: function(){}
};

// 工厂模式
function FactoryFun (name){
  var result = {};
  result.name = name;
  return result;
}
var a = FactoryFun("我是工厂模式");

// 构造函数模式
function ConstructorFun(name){
  this.name = name;
  this.method = function(){}
}
var c = new ConstructorFun("我是构造函数模式");

// 原型模式
function PrototypeFun(){
  this.name = "";
}
PrototypeFun.prototype.method_name = function(first_argument) {
  // body...
};
var p = new PrototypeFun();


/*------------------------继承---------------------------------*/
