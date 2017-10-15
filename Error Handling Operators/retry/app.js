const obj = Rx.Observable.interval(1000);
// emits value every 1 sec

const output = obj.flatMap(
    val => {
        if(val > 5){
            return Rx.Observable.throw('Error!');
        }
        return Rx.Observable.of(val);
    }
).retry(2);
// throws an error when value reaches 5

const subscription = output.subscribe(
    val => console.log(`Value: ${val}`),
    err => console.log(`${err} reached maximum`)
);
 // value: 0,value: 1,value: 2,value: 3,value: 4,value: 5
 // value: 0,value: 1,value: 2,value: 3,value: 4,value: 5
 // value: 0,value: 1,value: 2,value: 3,value: 4,value: 5
 // Error! reached maximum