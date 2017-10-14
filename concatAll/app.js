var s1 = Rx.Observable.interval(1000).take(5);
var s2 = Rx.Observable.interval(500).take(2);
var s3 = Rx.Observable.interval(2000).take(1);
// emitting 3 observables

var all = Rx.Observable.of(s1, s2, s3);
// creating new array with 3 observables

var concatAll = all.concatAll();


var subscription = concatAll.subscribe(
    val => console.log(val)
);

// Output 0,1,2,3,4,0,1,0

/**
 * subscribes each variable and emits the values in the order given Ex: s1, s2, s3
 */