const myPromise = val => new Promise(
    resolve => setTimeout(() => {
        resolve(`Result: ${val}`);
    }, 2000)
);

const obj = Rx.Observable.of(1, 2, 3);
// emits 1, 2, 3

const output = obj.map(
    val => myPromise(val)
) // maps each value to the promise
.mergeAll(); // emits the result

const subscription = output.subscribe(
    val => console.log(val)
);
/*
  output:
  "Result: 1"
  "Result: 2"
  "Result: 3"
*/