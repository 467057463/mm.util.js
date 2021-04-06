## lineToHump(string)

下划线转驼峰

**参数**

string: string(*) 

**返回值:** 

(*string*) 转换后的驼峰风格的值

**实例** 

``` js
 mmUtil.lineToHump('get_name') //getName
 mmUtil.lineToHump('_get_name') //getName  
 mmUtil.lineToHump('___get_name___') //getName  
 mmUtil.lineToHump('___get_____name___') //getName  
```
