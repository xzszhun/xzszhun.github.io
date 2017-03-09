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

// 工厂模式生成的无法获得对象所属类型
// ==>
// 构造函数模式
function ConstructorFun(name){
  this.name = name;
  this.method = function(){}
}
var c = new ConstructorFun("我是构造函数模式");

// 构造函数生成的对象，重复生成方法对象，除非把方法声明放到全局，通过变量调用方法，但这又造成了全局变量混乱（方法越来越多）
// ==>
// 原型模式
function PrototypeFun(){
}
PrototypeFun.prototype.name = "";
PrototypeFun.prototype.method_name = function(first_argument) {
  // body...
};
var p = new PrototypeFun();

// 单纯的原型模式又会导致所有生成的对象实例共用属性，在a对象上改的属性会影响到b对象上的相应属性。
// ==>
// 构造函数+原型 组合模式
function PrototypeFun(){
  this.name = "";
}
PrototypeFun.prototype.method_name = function(first_argument) {
  // body...
};
var p = new PrototypeFun();


// 寄生模式|组合寄生模式

/*------------------------继承---------------------------------*/

function superObj(){
  this.name = "superObj";
  this.show = function(){
    console.log('实例方法：'+this.name)
  }
}
superObj.prototype.getName = function(){
  console.log('原型方法：'+this.name);
}
function subObj(){
  this.name = "subObj"
}
subObj.prototype = new superObj();
function subObj1(){
  this.name = "subObj1"
}
subObj1.prototype = new superObj();
var so = new subObj();
var so1 = new subObj1()

