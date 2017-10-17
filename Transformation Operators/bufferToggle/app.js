const sourceInterval = Rx.Observable.interval(1000);
// emits every 1 sec

const startInterval = Rx.Observable.interval(5000);
// collects values after 5 sec and every 5 sec interval

const closeInterval = val => {
    console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`)
    return Rx.Observable.interval(3000);
}
// emits values every 3 sec and buffers after 3 sec

const output = sourceInterval.bufferToggle(startInterval, closeInterval);

const subscription = output.subscribe(
    val => console.log(val)
);
/**
 * Value 0 emitted, starting buffer! Closing in 3s!
 * [4, 5, 6]
 * Value 1 emitted, starting buffer! Closing in 3s!
 * [9, 10, 11]
 */