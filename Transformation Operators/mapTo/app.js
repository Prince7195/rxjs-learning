//emit value every two seconds
const source = Rx.Observable.interval(2000);
//map all emissions to one value
const example = source.mapTo('HELLO WORLD!');
//output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(val => console.log(val));
