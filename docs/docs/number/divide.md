## divide(num1, num2, ...otherNums)

返回参数相除的结果

**参数**

_num1: number(*)_ 被除数

_num2: number_ 除数

_...otherNums: number[]_ 额外除数


**返回值:** 

(*number*) 返回相除的结果

**实例** 

``` js
 mmUtil.divide(0.3, 0.1) //3  不是2.9999999999999996
 mmUtil.divide(100, 10, 10) //1  多个数相除
 mmUtil.divide(10) //10
```




