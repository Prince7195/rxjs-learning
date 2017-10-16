const obj = Rx.Observable.of('H', 'e', 'l', 'l', 'o','H1', 'e1', 'l1', 'l1', 'o1');
// emits a sring values

const output = obj.debounce(
    val => Rx.Observable.timer(1000)
);

const subscription = output.subscribe(
    val => console.log(val)
);
// output: o1