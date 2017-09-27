// Rx is imported from Rxjs reference

const click = Rx.Observable.fromEvent(document, 'click'); // click event executed on clicking document

var higherOrder = click.map(
    event => Rx.Observable
    .interval(
        Math.random() * 2000
    ).take(3) // generates an random number, takes 3 values
).take(2); // takes 2 click to execute the process 

var result = higherOrder.combineAll(); // combineAll combines the observable values and returns in a array
// it uses the combineLatest statergy to emit the data

result.subscribe(
    data => console.log(data)
);