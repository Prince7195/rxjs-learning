//emit 'Hello' and 'Goodbye'
const source = Rx.Observable.of('Hello', 'Goodbye');
// map value from source into inner observable, when complete emit result and move to next
const example = source.concatMap(val => Rx.Observable.of(`${val} World!`));
//output: 'Example One: 'Hello World', Example One: 'Goodbye World'
const subscribe = example
  .subscribe(val => console.log('Example One:', val));
