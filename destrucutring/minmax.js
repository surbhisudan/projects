function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }

  let array=[5, 2, 7, 1, 9];

  console.log(findMinMax(array));