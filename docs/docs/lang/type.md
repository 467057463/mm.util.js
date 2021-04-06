## type(obj)

返回参数类型

**参数**

obj: any(*) 

**返回值:** 

(*string*) 参数类型


**实例** 

``` js
 mmUtil.type([]) //array  不是object
 mmUtil.add({}) //object  
 mmUtil.add('s') //string 
 mmUtil.add(new String('s')) //string  不是object
 mmUtil.type(new Date()) // date  不是 object
 mmUtil.type(/reg/gi)) // regExp  不是 object
```

