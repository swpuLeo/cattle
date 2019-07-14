# 常见排序算法





## 冒泡排序





```js
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}
```





## 插入排序



## 选择排序



## 归并排序



## 快速排序



## 桶排序



## 基数排序



## 希尔排序



