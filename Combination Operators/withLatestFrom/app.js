const source1  = Rx.Observable.interval(5000);
// emits value every 5 sec

const source2 = Rx.Observable.interval(1000);
// emits value every 1 sec

const output = source1.withLatestFrom(source2).map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  });

const subscription = output.subscribe(
    val => console.log(val)
);
/*output:
  "First Source (5s): 0 Second Source (1s): 3"
  "First Source (5s): 1 Second Source (1s): 8"
  "First Source (5s): 2 Second Source (1s): 13"
  ...
*/