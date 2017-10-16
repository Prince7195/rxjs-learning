//emit 1,2,3,4,5
const source = Rx.Observable.of(1,2,3,4,5);
//allow values until value from source is greater than 4, then complete
const example = source.takeWhile(val => val <= 4);
//output: 1,2,3,4
const subscribe = example.subscribe(val => console.log(val));
