//emit every click
const source = Rx.Observable.fromEvent(document, 'click');
//if another click comes within 3s, message will not be emitted
const example = source.switchMap(val => Rx.Observable.interval(3000).mapTo('Hello, I made it!'));
//(click)...3s...'Hello I made it!'...(click)...2s(click)...
const subscribe = example.subscribe(val => console.log(val));
