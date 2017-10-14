// emits 1,2,3
const source1 = Rx.Observable.of(1,2,3);
// emits 4,5,6,7
const source2 = Rx.Observable.of(4,5,6,7);

// combines source1 and source2
var output = source1.concat(source2);
// or var output = Rx.Observable.concat(source1, source2);

var subscription = output.subscribe(
    (val) => {
        console.log(val);
        // outputs 1,2,3,4,5,6,7
    }
);