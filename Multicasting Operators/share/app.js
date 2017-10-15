//emit value in 1s
const source = Rx.Observable.timer(1000);
//log side effect, emit result
const example = source.do(() => console.log('***SIDE EFFECT***')).mapTo('***RESULT***');

const subscribe = example.subscribe(val => console.log(val));
const subscribeTwo = example.subscribe(val => console.log(val));
/*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output: 
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
*/

//share observable among subscribers
const sharedExample = example.share();

const subscribeThree = sharedExample.subscribe(val => console.log(val));
const subscribeFour = sharedExample.subscribe(val => console.log(val));
/*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output: 
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/