const interval = Rx.Observable.interval(1000);
// emits every 1 sec

const eventFn = Rx.Observable.fromEvent(document, 'click');
// emits values when the document is clicked

const output = interval.buffer(eventFn);

const Subscription = output.subscribe(
    val => console.log(val)
);
// outputs: [0, 1], [2, 3], [4, 5, 6, 7, 8, 9]