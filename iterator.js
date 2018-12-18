const makeIterator = (arr) => {
  let index = 0;
  return {
    next: () => {
      return index < arr.length ? { value: arr[index++], done: false } : {done: true}
    }
  }
}

let arr = [{value:1}, {value:2}]

const it = makeIterator(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
