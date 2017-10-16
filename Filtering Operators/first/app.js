const obj = Rx.Observable.from([1,2,3,4,5]);
// emits vaues

const output = obj.first();

const subscription = output.subscribe(
    val => console.log(val)
)
// output: 1