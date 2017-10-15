//take the first observable to emit
const obj = Rx.Observable.race(
    //emit every 1.5s
    Rx.Observable.interval(1500).take(7),
    //emit every 1s
    Rx.Observable.interval(1000).mapTo('1s won!').take(7),
    //emit every 2s
    Rx.Observable.interval(2000).take(7),
    //emit every 2.5s
    Rx.Observable.interval(2500).take(7)
);

//output: "1s won!"..."1s won!"...etc
const subscribe = obj.subscribe(val => console.log(val));