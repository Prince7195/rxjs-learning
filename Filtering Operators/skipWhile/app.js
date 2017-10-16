const obj = Rx.Observable.interval(1000);
// emits values every 1 sec

const output = obj.skipWhile(val => val < 5);

const subscription = output.subscribe(
    val => console.log(val)
);
// output: 5,6,7....