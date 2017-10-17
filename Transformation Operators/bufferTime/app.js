const interval = Rx.Observable.interval(1000);
// emits value every 1 sec

// const output = interval.bufferTime(2000);
const output = interval.bufferTime(2000, 1000);

const subscription = output.subscribe(
    val => console.log(val)
);
// output for single bufferTime Argument: [0], [1,2], [3,4]
// output for two bufferTime Argument: [0], [0,1], [1,2] -- every 1 sec interval