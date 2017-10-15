const obj = Rx.Observable.throw('This is an error msg');
// emitting an error

const output = obj.catch(
    val => Rx.Observable.of(`I caught: ${val}`)
);
//gracefully handle error, returning observable with error message

const subscription = output.subscribe(
    val => console.log(val)
);