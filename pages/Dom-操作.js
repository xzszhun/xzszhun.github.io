// 创建节点
var nodeObj = document.createElement('div');

// 节点查找

var parentNode = nodeObj.parentNode;
var firstNode = parentNode.childNodes[0]
    firstNode = parentNode.childNodes.item(0)
    firstNOde = parentNode.firsetChild;

var lastNode = parentNode.childNodes[parentNode.childNodes.length-1]
    // ...
    lastNode = parentNode.lastChild


var node = document.getElementById(); // id严格匹配
    node = getElementsByTagName();
// 节点插入

var newNode = docuemnt.createElement('div');

// 将 新节点/选中节点 添加到父节点的最后一个子节点
parentNode.appendChild(newNode); // 返回新节点对象

// 将操作节点添加到ref节点之前，如果ref节点为null。则等同与appendChild
parentNode.insertBefore(newNode,refNode); // 返回新节点对象

// 
parentNode.replaceChild(newNode, oldNode) // 返回oldNode对象

parentNode.removeChild(oldNode); // 返回旧节点

newNode.cloneNode(true) // true为深度拷贝，包含子节点树。false只拷贝自身节点。不拷贝js属性，如事件处理程序


newNode.normalize() //方法移除空的文本节点，并连接相邻的文本节点