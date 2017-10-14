//emit 5 values
const obj = Rx.Observable.of(1,2,3,4,5);
const output = obj
  //is every value even?
  .every(val => val % 2 === 0)
//output: false
const subscribe = output.subscribe(val => console.log(val));