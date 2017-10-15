const obj = Rx.Observable.interval(1000);
// emits value every 1 sec

const output = obj.startWith(7);
// startWith using single value

const outputM = obj.startWith(-3, -2, -1);
// startWith using multi value

// const subscription = output.subscribe(
//     val => console.log(val)
// );
// output: 7, 0, 1, 2, 3, ....

const subscription = outputM.subscribe(
    val => console.log(val)
 );
 // output: -3, -2, -1, 0, 1, 2, 3, ....