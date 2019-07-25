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
