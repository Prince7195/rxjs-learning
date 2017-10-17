const interval = Rx.Observable.interval(1000);
// emits value every 1 sec

// const output = interval.bufferCount(3);
const output = interval.bufferCount(3, 1); // second argument takes the interval - emits values for every one second

const subscription = output.subscribe(
    val => console.log(`Buffered Values: ${val}`)
);
// output for single buffercount Argument: Buffered Values: 0,1,2,  Buffered Values: 3,4,5
// output for two buffercount Argument: Buffered Values: 0,1,2,  Buffered Values: 1,2,3

setTimeout(() => {
    subscription.unsubscribe();
}, 20000);