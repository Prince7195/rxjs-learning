//emit value every 1 second
const source = Rx.Observable.interval(1000);
//throttle for 2 seconds, emit latest value
const example = source.throttle(val => Rx.Observable.interval(2000));
//output: 0...3...6...9
const subscribe = example.subscribe(val => console.log(val));
