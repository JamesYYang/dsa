无限数据流中随机抽样
==

今天来看这样一个问题：

给定一个数据流，数据流长度N很大，且N直到处理完所有数据之前都不可知，请问如何在只遍历一遍数据（O(N)）的情况下，能够随机选取出m个不重复的数据。

这个场景强调了3件事：

- 数据流长度N很大且不可知，所以不能一次性存入内存。
- 时间复杂度为O(N)。
- 随机选取m个数，每个数被选中的概率为m/N。

第1点限制了不能直接取N内的m个随机数，然后按索引取出数据。

第2点限制了不能先遍历一遍，然后分块存储数据，再随机选取。

第3点是数据选取绝对随机的保证。

如果你不知道“[蓄水池抽样算法（Reservoir Sampling）](https://en.wikipedia.org/wiki/Reservoir_sampling)”之前，你很可能想破头也想不出。

算法思路大致如下：

1. 如果接收的数据量小于m，则依次放入蓄水池。
2. 当接收到第i个数据时，i >= m，在[0, i]范围内取以随机数d，若d的落在[0, m-1]范围内，则用接收到的第i个数据替换蓄水池中的第d个数据。
3. 重复步骤2。

算法的精妙之处在于：当处理完所有的数据时，蓄水池中的每个数据都是以m/N的概率获得的。

可能代码如下：

```js
int[] reservoir = new int[m];
 
// init
for (int i = 0; i < reservoir.length; i++)
{
    reservoir[i] = dataStream[i];
}
 
for (int i = m; i < dataStream.length; i++)
{
    // 随机获得一个[0, i]内的随机整数
    int d = rand.nextInt(i + 1);
    // 如果随机整数落在[0, m-1]范围内，则替换蓄水池中的元素
    if (d < m)
    {
        reservoir[d] = dataStream[i];
    }
}
```