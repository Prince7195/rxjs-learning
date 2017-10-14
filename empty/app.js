//Create observable that immediately completes
const newObservable = Rx.Observable.empty();

const subscription = newObservable.subscribe(
    val => console.log(val),
    err => console.log(err),
    complete => console.log('completed')
);

// output: completed