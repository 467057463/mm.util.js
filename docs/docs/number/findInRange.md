## findInRange(range, value, includeStart, includeEnd)

在查找区间中查找

**参数**

_range: number:[](*)_ 区间数组

_value: number(*)_ 查找的值

_includeStart: boolean = true_ 数组中的第一项是否是第一个区间起始项，默认值为 true

_includeEnd: boolean = true_ 数组中的最后一项是否是最后一个区间结束项，默认值为 true

**返回值:** 

(*number*) 匹配成功返回区间索引，索引从0开始；匹配失败返回-1

**实例** 

``` js
let rang = [0, 60, 80, 100];

mmUtil.findInRange(rang, -1) // -1
mmUtil.findInRange(rang, 0)  // 0
mmUtil.findInRange(rang, 1)  // 0
mmUtil.findInRange(rang, 99)  // 2
mmUtil.findInRange(rang, 100)  // 2
mmUtil.findInRange(rang, 101)  // -1

mmUtil.findInRange(rang, -1, false, false)  // 0
mmUtil.findInRange(rang, 0, false, false)  // 1
mmUtil.findInRange(rang, 1, false, false)  // 1
mmUtil.findInRange(rang, 99, false, false)  // 3
mmUtil.findInRange(rang, 100, false, false)  // 4
mmUtil.findInRange(rang, 101, false, false)  // 4

mmUtil.findInRange(rang, 0, true, false)  // 0
mmUtil.findInRange(rang, 1, true, false)  // 0
mmUtil.findInRange(rang, -1, true, false)  // -1
mmUtil.findInRange(rang, 99, true, false)  // 2
mmUtil.findInRange(rang, 100, true, false)  // 3
mmUtil.findInRange(rang, 101, true, false)  // 3

mmUtil.findInRange(rang, -1, false)  // 0
mmUtil.findInRange(rang, 1, false)  // 1
mmUtil.findInRange(rang, 0, false)  // 1
mmUtil.findInRange(rang, 99, false)  // 3
mmUtil.findInRange(rang, 100, false)  // 3
mmUtil.findInRange(rang, 101, false)  // -1
```
