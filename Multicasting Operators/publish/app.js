//emit value every 1 second
const source = Rx.Observable.interval(1000);
const example = source
  //side effects will be executed once
  .do(() => console.log('Do Something!'))
  //do nothing until connect() is called
  .publish();

// source will not emit values until connect() is called
const subscribe = example.subscribe(val => console.log(`Subscriber One: ${val}`));
const subscribeTwo = example.subscribe(val => console.log(`Subscriber Two: ${val}`));

//call connect after 5 seconds, causing source to begin emitting items
setTimeout(() => {
 example.connect(); 
},5000)
/*
  output: (after 5s) 
  "Do Something!"
  "Subscriber One: 0"
  "Subscriber Two: 0"
  "Do Something!"
  "Subscriber One: 1"
  "Subscriber Two: 1"
*/