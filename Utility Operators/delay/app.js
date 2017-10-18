//emit one item
const example = Rx.Observable.of(null);
//delay output of each by an extra second
const message = Rx.Observable.merge(
    example.mapTo('Hello'),
    example.mapTo('World!').delay(2000)
  );
//output: 'Hello'...'World!'
const subscribe = message.subscribe(val => console.log(val));
