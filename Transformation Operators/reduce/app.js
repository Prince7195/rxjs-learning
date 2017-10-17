const source = Rx.Observable.of(1,2,3,4,5);
// emits 1,2,3,4,5

const output = source.reduce(
    (one, two) => one + two
);

const subscription = output.subscribe(val => console.log(val))