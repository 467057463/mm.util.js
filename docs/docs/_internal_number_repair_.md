# Module: "internal/number/repair"

## Functions

###  repair

▸ **repair**(`num`: number, `precision`: number): *number*

**`example`** 
0.30000000000000004 => 0.3
1.0999999999999999 => 1.1

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`num` | number | - | 要修复的数字 |
`precision` | number | 15 | 有效的小数位 |

**Returns:** *number*

返回正确的数
