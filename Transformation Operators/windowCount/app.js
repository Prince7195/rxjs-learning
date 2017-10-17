//emit every 1s
const source = Rx.Observable.interval(1000);
const example = source
    //start new window every 4 emitted values
    .windowCount(4)
    .do(() => console.log('NEW WINDOW!'))

const subscribeTwo = example 
  //window emits nested observable
  .mergeAll()
/*
  output:
  "NEW WINDOW!"
  0
  1
  2
  3
  "NEW WINDOW!"
  4
  5
  6
  7 
*/
  .subscribe(val => console.log(val));
