const subject = new Rx.Subject();
//basic scan example, sum over time starting with zero
const example = subject
  .startWith(0)
  .scan((acc, curr) => acc + curr);
//log accumulated values
const subscribe = example.subscribe(val => console.log('Accumulated total:', val));
//next values into subject, adding to the current sum
subject.next(1); //1
subject.next(2); //3
subject.next(3); //6
