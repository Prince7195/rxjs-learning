//emit immediately then every 1s
const source = Rx.Observable.timer(0, 1000);
const example = source
  .window(Rx.Observable.interval(3000))
const count = example.scan((acc, curr) => acc + 1, 0)          
/*
  "Window 1:"
  0
  1
  2
  "Window 2:"
  3
  4
  5
  ...
*/
const subscribe = count.subscribe(val => console.log(`Window ${val}:`));
const subscribeTwo = example.mergeAll().subscribe(val => console.log(val));
