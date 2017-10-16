const obj = Rx.Observable.from([1,2,3,4,5,6]);
// emit the values 

const outputFiter = obj.filter(
    num => num % 2 === 0
);
// filter condition to get even number

const subscription = outputFiter.subscribe(
    val => console.log(val)
);
// output: 2,4,6