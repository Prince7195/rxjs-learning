//emits any number of provided values in sequence
const source = Rx.Observable.of(1,2,3,4,5);
//output: 1,2,3,4,5
const subscription = source.subscribe(val => console.log(val));
