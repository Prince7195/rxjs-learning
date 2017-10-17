const source = Rx.Observable.of(2);
// emits value 2

const output = source.expand(val => {return Rx.Observable.of(1 + val)}).take(5);
// emits 5 values by incrementing the values

const subscription = output.subscribe(val => console.log(val));
// output 2,3,4,5,6