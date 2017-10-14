const obj = Rx.Observable.interval(1000);
// emits value for every 1 sec

const output = obj.pairwise();

const subscription = output.subscribe(
    val => console.log(val)
);
// output: [0, 1], [1, 2], [2, 3]....