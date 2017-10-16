const source = Rx.Observable.zip(
    Rx.Observable.from(['Joe', 'Frank', 'Bob', 'Joe1', 'Frank1', 'Bob1']),
    // emits values in sequence
    Rx.Observable.interval(1000)
    // emits value every 1 sec
);

const output = source.sample(Rx.Observable.interval(2000));

const subscription = output.subscribe(
    val => console.log(val)
);
// output: ["Joe", 0], ["Bob", 2], ["Frank1", 4]