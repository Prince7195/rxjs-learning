//emit value every 1 second
const source = Rx.Observable.interval(1000);
/*
  throttle for five seconds
  last value emitted before throttle ends will be emitted from source
*/
const example = source
  .throttleTime(5000);
//output: 0...5...10
const subscribe = example.subscribe(val => console.log(val));
