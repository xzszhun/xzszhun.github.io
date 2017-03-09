// es5 新增的方法
Object.create();

Object.defineProperty()

Object.getOwnPropertyDescriptor()

Object.getOwnPropertyNames()

Object.keys()

Object.perventExtensions()

Object.isExtensible()

Object.seal()

Object.isSealed()

Object.freeze()

Object.isFrozen()

// Object.create()
// 创建对象的实现方法：（原型式继承）
function create(o){
  function f(){};
  f.prototype = o;
  return new f();
}
// ------------------- //
Object.create(obj,extraObj) // 第二个参数是为新对象定义额外属性的对象


// 定义对象属性
Object.defineProperty(Obj,Prop,descriptor)

Object.defineProperty(o,'age',{
  value:undefined,  //  属性age的值，默认为undefined
  writable:false,   //  是否只读
  enumerable:false, //  是否可以被枚举（for in）
  configurable:false  //  是否可以被删除
  get:undefined,  //  返回属性值
  set:undefined,  //  为属性设置
})
// 设置多个属性property
Object.defineProperties(o, {
    'age': {
        value: 24,
        writable: true,
        enumerable: true,
        configurable: true
    },
    'sex': {
        value: 'male',
        writable: false,
        enumerable: false,
        configurable: false
    }
});

// 获取defineProperty 方法设置的property特性
Object.getOwnPropertyDescriptor(Obj,Property) // Object {value: undefined, writable: false, enumerable: false, configurable: false}

// 获取所有自身Property特性名，即不包括原型链prototype上的属性
Object.getOwnPropertyNames(Obj) //[]

//和getOwnPropertyNames方法类似，但是获取所有的可枚举的属性，返回一个数组
Object.keys(Obj)


// 用于锁住对象属性，使其不能够拓展，也就是不能增加新的属性，但是属性的值仍然可以更改，也可以把属性删除，Object.isExtensible用于判断对象是否可以被拓展

Object.preventExtensions(Obj) // 可删、不可加、可改
Object.isExtensible(Obj)

//用于把对象密封，也就是让对象既不可以拓展也不可以删除属性（把每个属性的configurable设为false）,单数属性值仍然可以修改，Object.isSealed由于判断对象是否被密封

Object.seal(Obj)  // 不可删，不可加，可改
Object.isSealed(Obj)

//终极神器，完全冻结对象，在seal的基础上，属性值也不可以修改（每个属性的wirtable也被设为false）

Object.freeze(Obj)  // 不可删、不可加、不可改
Object.isFrozen(Obj)
