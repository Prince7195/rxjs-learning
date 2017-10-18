const source = Rx.Observable.of(1,2,3,4,5);
// emits 1,2,3,4,5

const output = source.do(val => console.log(`First Log: ${val}`))
// first logging
.map(val => val + 10)
// adding 10 to the values
.do(val => console.log(`Second Log: ${val}`));
// second logging

const subscription = output.subscribe(
    val => console.log(val)
);
