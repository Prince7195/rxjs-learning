const obj = Rx.Observable.interval(1000);
// emits value every 1 sec

const output = obj.skipUntil(Rx.Observable.interval(6000));

const subscription = output.subscribe(
    val => console.log(val)
);
// output: 5,6,7,....

setTimeout(() => {
    subscription.unsubscribe();
}, 20000);