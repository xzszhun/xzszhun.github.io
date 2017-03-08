// 模拟实现apply，call，bind( es5 )

Function.prototype.apply = function(context,arr){
  var fun = this,
    funName = fun.name;
  context[funName]=fun;
  context[funName](arr);
}
var obj = {
  sayName:function(id,name){
    this.fun = "obj";
    console.log(this.fun+id+name);
  }
}
var c = {
  fun:"c"
}
obj.sayName.apply(c,[1,"name"])