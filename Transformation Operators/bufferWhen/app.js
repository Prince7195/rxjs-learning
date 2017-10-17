const interval = Rx.Observable.interval(1000);
// emits every 1 sec

const fiveSecInterval = () => Rx.Observable.interval(5000)
// starts emitting after and every 5 sec

const output = interval.bufferWhen(fiveSecInterval);

const subscription = output.subscribe(
    val => console.log(val)
);

// output: [0, 1, 2, 3], [4, 5, 6, 7, 8]