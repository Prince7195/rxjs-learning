//emit array as a sequence
const source = Rx.Observable.from([1,2,3,4,5]);
//demonstrating the difference between let and other operators
const test = source
  .map(val => val + 1)
  /*
      this would fail, let behaves differently than most operators
      val in this case is an observable
  */
  //.let(val => val + 2)
  .subscribe(val => console.log('VALUE FROM ARRAY: ', val));

const subscribe = source
  .map(val => val + 1)
  //'let' me have the entire observable
  .let(obs => obs.map(val => val + 2))
  //output: 4,5,6,7,8
  .subscribe(val => console.log('VALUE FROM ARRAY WITH let: ', val));
