# javaScript 小工具包

```javascript
// 使用jstools.js
import {isNumber} from './jstools'; //本文件目录
console.log(isNumber(1223)) // true
//使用jstools.min.js
<script type="text/javascript" src="./jstools.min.js"/>
console.log(isNumber(333)) // true    

```



```javascript
// 验证小数点后两位
 checktwoDian(s)
//验证uuid是否合法
 checkUUID(s)
//邮箱
 isEmail(s)
//手机号码
 isMobile(s)
//电话号码
 isPhone(s)
//是否url地址
 isURL(s)
//是否字符串
 isString(o)
//是否数字
 isNumber(o) 
//是否boolean
 isBoolean(o) 
//是否函数
 isFunction(o) 
//是否为null
 isNull(o) 
//是否undefined
 isUndefined(o)
//是否对象
 isObj(o) 
//是否数组
 isArray(o) 
//是否时间
 isDate(o)
//是否正则
 isRegExp(o)
//是否错误对象
 isError(o) 
//是否Symbol函数
 isSymbol(o)
//是否Promise对象
 isPromise(o) 
//是否Set对象
 isSet(o) 

//是否是微信浏览器
 isWeiXin() 
//是否是移动端
 isDeviceMobile()
//是否是QQ浏览器
 isQQBrowser() 
//是否是爬虫
 isSpider() 
//是否ios
 isIos()
//是否为PC端
 isPC()
//去除html标签
 removeHtmltag(str)
//获取url参数
 getQueryString(name)
//动态引入js
 injectScript(src)
//根据url地址下载
 download(url)
//el是否包含某个class
 hasClass(el, className)
//el添加某个class
 addClass(el, className)
//el去除某个class
 removeClass(el, className)
//获取滚动的坐标
 getScrollPosition(el = window)
//滚动到顶部
 scrollToTop()
//el是否在视口范围内
 elementIsVisibleInViewport(el, partiallyVisible = false) 
//洗牌算法随机
 shuffle(arr) 
//拦截粘贴板
 copyTextToClipboard(value)
//判断类型集合
 checkStr(str, type) 
//严格的身份证校验
 isCardID(sId)

//随机数范围
 random(min, max)
//将阿拉伯数字翻译成中文的大写数字
 numberToChinese(num) 
//将数字转换为大写金额
 changeToChinese(Num) 
//判断一个元素是否在数组中
 contains(arr, val) 
//数组排序，{type} 1：从小到大 2：从大到小 3：随机
 sort(arr, type = 1) 
//去重
 unique(arr)
//求两个集合的并集
 union(a, b)
//求两个集合的交集
 intersect(a, b) 
//删除其中一个元素
 remove(arr, ele) 
//将类数组转换为数组
 formArray(ary) 
//最大值
 max(arr)
//最小值
 min(arr) 
//求和
 sum(arr) 
//平均值
 average(arr)
//去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
 trim(str, type) 
//字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 changeCase(str, type) 
//检测密码强度
 checkPwd(str)
//函数节流器
 debouncer(fn, time, interval = 200)
//在字符串中插入新字符串
 insertStr(soure, index, newStr) 
//判断两个对象是否键值相同
 isObjectEqual(a, b)
//16进制颜色转RGBRGBA字符串
 colorToRGB(val, opa) 
//追加url参数
 appendQuery(url, key, value) 
//获取浏览器类型
 getBrowserType()
```

