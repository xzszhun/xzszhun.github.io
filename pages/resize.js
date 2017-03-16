// 学习https://github.com/sdecima/javascript-detect-element-resize
function addResizeToElement(element,callback){
  // 元素内部添加不可见触发器容器，负责分发滚动事件
  element._resizeTrigger_;
  // 负责保存元素的resize事件集合
  element._resizeListenerEvents;
  // 负责元素最新的尺寸数据对象，offset
  element._lastSize_;
  // 为页面添加监听动画style
  function addStyle(){

  }
  // 为元素添加触发器
  function initTriggers(){

  }
  // 重置触发器
  // 重置的具体内容：使得每个滚动事件分发触发器的scrollTop/Left在最低部/右部
  function resetTriggers(){

  }
  // 滚动监听事件
  // 重置触发器
  // 检查scroll发生时，元素的resize回调事件是否需要触发
  // 需要时执行所有相关的resize事件
  function scrollListener(e){

  }

  // 监听 行为交互变化
  element.addEventListener('scroll',scrollListener,false);
  // 监听 css,当重新显示时重置
  element.addEventListener('animationstart',function(e){
    if(e._resizeTrigger_.animationName == animationName){
      // 重置触发器
    }
  });
}
