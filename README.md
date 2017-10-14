RxJS - It is a reactive javascript library for Events and complex Asyncronous callback functions. Observables works as the major part of RxJS.

Reference Links --- http://reactivex.io/rxjs/ , https://www.learnrxjs.io/

Operators:
 * Oprerator is working behin the Observables.
 * .map(), .merge() etc,.

 Major Operator Types:
 1) Combination Operators:
  -> joining of information of multiple observables.

  Operators Types:

  => combineAll - combines multiple observables to create new observable that combines the latest emited values of the input observable.
  Ex: ./combineAll/app.js

  => combineLatest - converts higher order observable to forst order observable and waits for the completion of outer observable to emit the output.
  Ex: ./combineLatest/app.js

  => concat - creates an output observable that concats all observable emited values in sequential order one observale after another.
  Ex: ./concat/app.js

  => concatAll - converts higher order observable to first order observable and combines all inner observables in order.
  Ex: ./concatAll/app.js

  => forkJoin - coverts almost anything to an observable and emits in a array.
  Ex: ./forkJoin/app.js

  => merge - creates an observable the combines all the emitted values from the input observables.
  Ex: ./merge/app.js

  => mergeAll - converts higher order observable to first order observable that delivers all values emitted by the inner observables.
  Ex: ./mergeAll/app.js

  => pairwise - puts the current value and next value as an array and emits it.
  Ex: ./pairwise/app.js

  => race - returns an observable that mirrors the first source observable emits that occured with multiple of observables and ignores other.
  Ex: ./race/app.js

  => startWith - returns an observable that emits the output concating the startwith value as prefix to the actual output.
  Ex: ./startWith/app.js

  => withLatestFrom - whenever the source observable emits the value it combines with the latest emitted value of another observable.
  Ex: ./withLatestFrom/app.js

  => zip - combines multiple observable and createa an observable that collets all values emitted by inner observables and emits in a array.
  Ex: ./zip/app.js