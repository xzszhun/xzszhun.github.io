var stringObject = "",
  index = 0,
  searchvalue = "",
  fromindex = 0,
  start = 0,
  end = 0,
  howmany = 0,
  regexp = new Regexp();

// 搜索
  stringObject.charAt(index); //可返回指定位置的字符
  stringObject.charCodeAt(idnex); // 返回在指定的位置的字符的 Unicode 编码
  stringObject.indexOf(searchvalue,fromindex); // 返回某个指定的字符串值在字符串中首次出现的位置
  stringObject.lastIndexOf(searchvalue,fromindex); // 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索

  stringObject.match(searchvalue); //类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置
  stringObject.match(regexp); // 类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置
  stringObject.search(regexp); // 检索与正则表达式相匹配的值

// 字符串截取与分割
  (new String()) stringObject.replace(regexp,replacement) //  替换与正则表达式匹配的子串
  (new String()) stringObject.replace(substr,replacement) //  替换与正则表达式匹配的子串
                                          // replacement可以是字符串，也可以是函数，且如下时：
                                          // replacement为 $1、$2、...、$99，与 regexp 中的第 1 到第 99 个子表达式相匹配的文本
                                          //  $& ，与 regexp 相匹配的子串
                                          //  $` ，位于匹配子串左侧的文本
                                          //  $' ，位于匹配子串右侧的文本
                                          //  $$ ，直接量符号
  (new String()) stringObject.slice(start,end); // 提取字符串的某个部分; 允许负数
  (new String()) stringObject.substring(start,stop); //提取字符串的某个部分；不允许负数
// 转换
  stringObject.split(separator,howmany); // 分割成字符串数组,howmany 决定数组最大长度

// 拼接
  (new String()) stringObject.concat(stringX," ",...,stringX)