// multicast with standard Subject

const obj = Rx.Observable.interval(1000).take(3);
// emits values till 5 at interval of 1 sec

const output = obj.do(console.log('first side effect')).mapTo('Result!');
//since we are multicasting below, side effects will be executed once

const multicast = output.multicast(() => new Rx.Subject());
// subscribe subject to source upon connect()

//subscribe subject to source
const subscriberOne = multicast.subscribe(val => console.log(val));
const subscriberTwo = multicast.subscribe(val => console.log(val));
multicast.connect();
/*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/