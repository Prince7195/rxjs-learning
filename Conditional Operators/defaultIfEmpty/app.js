const obj = Rx.Observable.of();
// emits empty

const output = obj.defaultIfEmpty('default value if input is empty');

const subscription = output.subscribe(
    val => console.log(val)
);
// output: default value if input is empty