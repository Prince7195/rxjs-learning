//emit value in sequence every 1 second
const source = Rx.Observable.interval(1000);
//output: 0,1,2,3,4,5....
const subscription = source.subscribe(val => console.log(val));

setTimeout(() => {
    subscription.unsubscribe();
}, 20000);
