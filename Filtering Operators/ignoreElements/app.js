const obj = Rx.Observable.interval(100).take(5);
// emits numbers at interval of 1 sec

const output = obj.ignoreElements();

const subscription = output.subscribe(
    val => console.log(`value: ${val}`),
    err => console.log(`Error: ${err}`),
    complete => console.log(`Completed`)
);
// output: Complete