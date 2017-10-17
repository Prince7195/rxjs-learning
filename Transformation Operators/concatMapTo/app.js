const interval = Rx.Observable.interval(2000);
// emits value every 2 sec

const source = Rx.Observable.interval(1000).take(5);
// emits value every 1 sec for 5 sec

const output = interval.concatMapTo(source, (firstInterval, secondInterval) => `${firstInterval} ${secondInterval}`);

const subscription = output.subscribe(
    val => console.log(val)
);
/*
  output: 0 0
          0 1
          0 2
          0 3
          0 4
          1 0
          1 1
          continued...

*/