// 学习https://github.com/sdecima/javascript-detect-element-resize
function addResizeListener(element,options){
  const _defaults = {
    resizeAnimation: 'resizeAnimation',
    callback:function(){}
  }
  const _options = merge({}, _defaults, options, {isDeep: true});
  // 元素内部添加不可见触发器容器，负责分发滚动事件
  element._resizeTrigger_ = {};
  // 负责保存元素的resize事件集合
  element._resizeListenerEvents = [];
  // 负责元素最新的尺寸数据对象，offset
  element._lastSize_ = {};
  // 修复并兼容requestAnimationFrame
  (function fixAnimation(){
    animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRuestAnimationFrame || function( fn ){
      return setTimeout(fn,20)
    }
    cancelAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimation || function(){
      clearTimeout(animationFrame)
    }
  })()
  // 为页面添加监听动画style
  function addStyle(){
    
  }
  // 为元素添加触发器
  function initTriggers(){
    // div.resizeAnimation>div.expand>div^div.contract
    var triggers = document.createElement('div');
    triggers.className='resize-triggers';
    triggers.innerHTML = '<div class="expand-trigger"><div></div></div> <div class="contract-trigger"></div>';

    element.appendChild(triggers);
    element._resizeTrigger_ = triggers;
  }
  // 做一个过滤操作，避免重复添加
  initTriggers()
  // 重置触发器
  // 重置的具体内容：使得每个滚动事件分发触发器的scrollTop/Left在最低部/右部
  function resetTriggers(){
    const triggers = element._resizeTrigger_,
      expand = triggers.firstElementChild,
      expandChild = expand.firstElementChild,
      contract = triggers.lastElementChild,
      offsetWidth = element.offsetWidth,
      offsetHeight = element.offsetHeight;

    contract.scrollLeft = contract.scrollWidth;
    contract.scrollTop = contract.scrollHeight;

    expandChild.style.height = expand.offsetHeight+1+ 'px';
    expandChild.style.width = expand.offsetWidth+1+ 'px';
    expand.scrollLeft = expand.scrollWidth;
    expand.scrollTop = expand.scrollHeight;
  }
  function checkResize(){
    return element._lastSize_.offsetWidth != element.offsetWidth || element._lastSize_.offsetHeight != element.offsetHeight;
  }
  // 滚动监听事件
  // 重置触发器
  // 检查scroll发生时，元素的resize回调事件是否需要触发
  // 需要时执行所有相关的resize事件
  function scrollListener(e){
    resetTriggers();
    if(checkResize()){
      // 节流处理
      element._lastSize_ = {
        offsetHeight: element.offsetHeight,
        offsetWidth: element.offsetWidth
      };
      element._resizeListenerEvents.forEach(function(fn){
        fn.call(element,e);
      });
    }
  }
  element.style.position = "relative"
  resetTriggers();
  element._resizeListenerEvents.push(_options.callback);
  // 监听 行为交互变化
  element.addEventListener('scroll',scrollListener,true);
  // 监听 css,当重新显示时重置
  element._resizeTrigger_.addEventListener('animationstart',function(e){
    if(e.animationName == _options.animationName){
      // 重置触发器
      resetTriggers();
    }
  });
}

function merge(target = {}, sources = {}, assigns = {}, {isDeep = false} = {}){
  if(Object.prototype.toString.call(sources).slice(8,-1) != 'Array' && Object.prototype.toString.call(sources).slice(8,-1) != 'Object'){
    return sources;
  }
  for(var s in sources){
    if(sources.hasOwnProperty(s) && sources[s] !== undefined){
      target[s] = isDeep ? merge(target[s],sources[s]) : sources[s];
    }
  }
  for(var a in assigns){
    if(assigns.hasOwnProperty(a) && assigns[a] !== undefined){
      target[a] = isDeep ? merge(target[a],assigns[a]) : assigns[a];
    }
  }
  return target;
}
// export default addResizeListener;