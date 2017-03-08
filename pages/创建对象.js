// 单例模式
var Singleton = {
  name: '',
  method: function(){}
};

// 工厂模式
function FactoryFun (name){
  var result = {};
  result.name = name;
  return result;
}
var a = FactoryFun('我是工厂模式');

// 构造函数模式
function ConstructorFun(name){
  this.name = name;
  this.method = function(){}
}
var c = new ConstructorFun('我是构造函数模式');

// 原型模式
function PrototypeFun(){
  this.name = '';
}
PrototypeFun.prototype.method_name = function(first_argument) {
  // body...
};
var p = new PrototypeFun();


/*------------------------继承---------------------------------*/

// 原型链式继承

// 构造函数继承
function SuperType(name){
  this.name = name;
  this.getName = function(){
    console.log('super.name'+this.name);
  }
}
function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
  this.setName = function(name){this.name = name}

}
var s1 = new SubType('s1',10)
var s2 = new SubType('s2',12)
s1.getName()
s1.setName()
// 组合式继承：原型链+构造函数
function SuperType (name){
  this.name = name;
  this.nums = ['1', '2', '3'];
}
SuperType.prototype.getName = function (){
  console.log(this.name);
}

function SubType(name,age){
  SuperType.call(this,name); // 第二次调用SuperType构造函数；两次调用超类型对象的构造函数，这也是组合继承的最大问题
  this.age = age;
}
SubType.prototype = new SuperType() // 第一次调用SuperType构造函数
SubType.prototype.constructor = SubType;
// SubType.prototype.getName = function(){
//   console.log('sub.name:'+this.name)
// }
SubType.prototype.getAge = function(){
  console.log('sub.age:'+this.age);
}
var s1 = new SubType('s1',1);
s1.nums.push('s1');
s1.getName();
s1.getAge();
console.log(s1.nums)
var s2 = new SubType('s2',5);
s2.nums.push('s2');
s2.getName();
s2.getAge();
console.log(s2.nums)
SuperType.prototype.getName = function (){
  console.log('super.name:'+this.name);
}
s1.getName(); //super.name:s1


// 原型式继承
function create(o){
  function f(){};
  f.prototype = o;
  return new f();
}
var person = {name:'xzs', cards:[1, 2, 3], f: function(){}}
var p1 = create(person); // f{} 是一个对象
var p2 = create(person); // f{}
// var obj = {}; // Object {}
p1.f === p2.f ; // p1,p2 共享person的属性

// 寄生式继承：调用了原型式继承的实现方法
function createAnother(obj){
  var clone = create(obj); // 通过原型式继承生成新对象
  clone.getName = function(){
    console.log('name')
  }
  return clone;
}

// 原型式继承/寄生式继承的好处是哪

// 寄生组合式继承
function inheritPrototype(subType,superType){
  var prototype = create(superType.prototype) // 创建对象
  prototype.constructor = subType;  // 增强对象
  subType.prototype = prototype;  //制定对象
}
// 上面方法的理解：生成超类的原型对象副本，
// 并为其设定构造函数指向，最后把这个原型对象赋给子类
// 因为SubType.prototype = new SuperType()的实质是
// 为了把超类的原型链绑定到子类上，
// 那么就没有必要把超类的实例属性也一起绑定到子类的原型上了
// 因为在子类的构造函数中会又一次创建超类的实例属性，并屏蔽原型上的实例属性

// 利用寄生组合式继承改写上面的（组合式继承）
function SuperType (name){
  this.name = name;
  this.nums = ['1', '2', '3'];
}
SuperType.prototype.getName = function (){
  console.log(this.name);
}

function SubType(name,age){
  SuperType.call(this,name); // 第二次调用SuperType构造函数；两次调用超类型对象的构造函数，这也是组合继承的最大问题
  this.age = age;
}
//SubType.prototype = new SuperType()
//SubType.prototype.constructor = SubType;
inheritPrototype(SubType,SuperType); // 替换了上面的两句



SubType.prototype.getAge = function(){
  console.log('sub.age:'+this.age);
}