const source = Rx.Observable.from([1,2,3,4,5,6,7]);
// emits values

const output = source.last();

const subscription = output.subscribe(
    val => console.log(val)
);
// output: 7