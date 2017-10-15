const obj1 = Rx.Observable.interval(2500);
// emits value every 2.5 sec

const obj2 = Rx.Observable.interval(1000);
// emits value every 1 sec

const output = obj1.merge(obj2);
// used as instance method for merging two observable

const subscription = output.subscribe(
    (val) => console.log(val)
);
// outputs 0,1,0,2,...