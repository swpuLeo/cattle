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

const arr = []

for (let i = 0; i < 100000; i++) {
  arr.push(Math.floor(Math.random() * 100000))
}

const start = +new Date()
BubbleSort(arr)
console.log(+new Date() - start)
