const source = Rx.Observable.interval(1000);
// emits value every 1 sec

const timer = () => Rx.Observable.timer(5000);
// emits after 5 sec

const output = source.delayWhen(timer);

const subscription = output.subscribe(
    val => console.log(val)
);