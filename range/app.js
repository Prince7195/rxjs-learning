//emit 1-10 in sequence
const source = Rx.Observable.range(1,10);
//output: 1,2,3,4,5,6,7,8,9,10
const example = source.subscribe(val => console.log(val));
