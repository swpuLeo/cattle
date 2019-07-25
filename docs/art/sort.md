# 排序


## 冒泡排序

```js
const BubbleSort = arr => {
  let lastExchangeIndex = 0
  let sortBorder = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    let sorted = true
    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        sorted = false
        lastExchangeIndex = j
      }
    }
    sortBorder = lastExchangeIndex
    if (sorted) break
  }
}
```


## 选择排序

```js
const SelectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}
```


## 插入排序

```js
const InsertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let j = i - 1
    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = a[j]
      j -= 1
    }
    a[j + 1] = cur
  }
  return arr
}
```
