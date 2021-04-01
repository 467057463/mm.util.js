# Module: "number/add"

## number Functions

### `Const` add

▸ **add**(`num1`: number, `num2`: number, ...`otherNums`: number[]): *number*

精确加法

**`example`** 
``` js
 mmUtil.add(0.1, 0.2) //0.3  不是0.3000000001
 mmUtil.add(1, 1, 2) //4  多个数相加
 mmUtil.add(10) //10
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`num1` | number | 加数 |
`num2` | number | 加数 |
`...otherNums` | number[] | - |

**Returns:** *number*

返回相加的和
