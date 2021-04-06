## humpToLine(string)

驼峰转下划线

**参数**

string: string(*) 

**返回值:** 

(*string*) 转换后的下划线风格的值

**实例** 

``` js
 mmUtil.humpToLine('getName') //get_name
 mmUtil.humpToLine('GetName') //get_name  
 mmUtil.humpToLine('GetNameS') //get_name_s  
 mmUtil.humpToLine('GETNAME') //g_e_t_n_a_m_e  
```
