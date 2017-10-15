// creates observable that emits click event
const obj = Rx.Observable.fromEvent(document, 'click');

// mapping to the timestamp of an event
const output = obj.map(
    event => `Event time: ${event.timeStamp}`
);

const subscription = output.subscribe(
    val => console.log(val)
);

// output: Event time: 13757.29