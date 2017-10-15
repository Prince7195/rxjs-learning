const obj = Rx.Observable.interval(1000);
// emits value every 1 sec

const output = obj.map(
    val => {
        if(val>5)
            throw val;
        return val;
    }
).retryWhen(
    err => err.do(
        // log error msg
        val => console.log(`Value ${val} was too high!`)
    ).delayWhen(
        val => Rx.Observable.timer(val * 1000)
    )
);
/*
  output: 
  0
  1
  2
  3
  4
  5
  "Value 6 was too high!"
  --Wait 5 seconds then repeat
*/
const subscription = output.subscribe(val => console.log(val));

setTimeout(() => {
    subscription.unsubscribe();
}, 60000);