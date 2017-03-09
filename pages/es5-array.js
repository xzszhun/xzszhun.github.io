/*
  在es5中数组Array新增了
    遍历  forEach
    映射  map
    过滤  filter
    某些  some
    每个  every
    位置  indexOf 
          lastIndexOf
    迭代  reduce
          reduceRight
 */

// 模拟实现forEach
Array.prototype.forEach1 = null;
if(! (Array.prototype.forEach1 instanceof Function)){
  Array.prototype.forEach1 = function(callback,context){
      var that = this;
      if(context){
        that = context;
      }
      if(callback instanceof Function){
        for(var i = 0,length = that.length;i<length;i++){
          callback.call(that,that[i],i,that)
        }
      }
  }
}

console.log();
[1,2,3,4,5].forEach1(function(val,index,arr){
  console.log(val,index,arr);
});

// 模拟实现map
if(! (Array.prototype.map1 instanceof Function)){
  Array.prototype.map1 = function(callback,context){
      var that = this,newArr = [];
      if(context){
        that = context;
      }
      if(callback instanceof Function){
        for(var i = 0,length = that.length;i<length;i++){
          newArr.push(callback.call(that,that[i],i,that))
        }
      }
      return newArr;
  }
}

// 模拟实现filter
if(! (Array.prototype.filter1 instanceof Function)){
  Array.prototype.filter1 = function(callback,context){
      var that = this,newArr = [];
      if(context){
        that = context;
      }
      if(callback instanceof Function){
        for(var i = 0,length = that.length;i<length;i++){
          // if(callback.call(that,that[i],i,that)){
          //   newArr.push(that[i]);
          // }
          callback.call(that,that[i],i,that) && newArr.push(that[i]);
        }
      }
      return newArr;
  }
}

// 模拟实现some
if(! (Array.prototype.some1 instanceof Function)){
  Array.prototype.some1 = function(callback,context){
      var that = this,flag = false;
      if(context){
        that = context;
      }
      if(callback instanceof Function){
        for(var i = 0,length = that.length;i<length;i++){
          if(callback.call(that,that[i],i,that)){
            flag = true;
            break;
          }
        }
      }
      return flag;
  }
}

// 模拟实现every
if(! (Array.prototype.every1 instanceof Function)){
  Array.prototype.every1 = function(callback,context){
      var that = this,flag = true;
      if(context){
        that = context;
      }
      if(callback instanceof Function){
        for(var i = 0,length = that.length;i<length;i++){
          if(!callback.call(that,that[i],i,that)){
            flag = false;
            break;
          }
        }
      }
      return flag;
  }
}

// 模拟实现indexOf
if(! (Array.prototype.indexOf1 instanceof Function)){
  Array.prototype.indexOf1 = function(searchReg,fromeIndx){
      var that = this,resultIndex = -1;
      // fromeIndx = parseInt(fromeIndx)||0;
      fromeIndx = fromeIndx*1||0; // 这种验证更加接近原生
      if(callback instanceof Function){
        for(var i = fromeIndx,length = that.length;i<length;i++){
          if(searchReg === that[i]){
            resultIndex = i;
            break;
          }
        }
      }
      return resultIndex;
  }
}

// 模拟实现lastIndexOf
if(! (Array.prototype.lastIndexOf1 instanceof Function)){
  Array.prototype.lastIndexOf1 = function(searchReg,fromeIndx){
      var that = this,resultIndex = -1,length = that.length-1;
      // fromeIndx = parseInt(fromeIndx)||0;
      fromeIndx = fromeIndx*1||length; // 这种验证更加接近原生
      if(callback instanceof Function){
        for(var i = fromeIndx;i>-1;i--){
          if(searchReg === that[i]){
            resultIndex = i;
            break;
          }
        }
      }
      return resultIndex;
  }
}

// 模拟实现reduce
if(! (Array.prototype.reduce1 instanceof Function)){
  Array.prototype.reduce1 = function(callback,initialValue){
      var that = this;
      initialValue = initialValue||0;
      if(callback instanceof Function){
        for(var i = 0,length = that.length;i<length;i++){
          initialValue = callback.call(that,initialValue,that[i],i,that)
        }
      }
      return initialValue;
  }
}
// 模拟实现reduceRight
if(! (Array.prototype.reduce1 instanceof Function)){
  Array.prototype.reduce1 = function(callback,initialValue){
      var that = this,length = that.length-1;
      initialValue = initialValue||length;
      if(callback instanceof Function){
        for(var i = length;>-1;i--){
          initialValue = callback.call(that,initialValue,that[i],i,that)
        }
      }
      return initialValue;
  }
}
[0, 1, 2, 3, 4].reduce1(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
});