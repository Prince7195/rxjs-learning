//emit array as a sequence of values
const array = Rx.Observable.from([1,2,3,4,5]);

const subscription = array.subscribe(val => console.log(val));
//output: 1,2,3,4,5