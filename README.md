RxJS - It is a reactive javascript library for Events and complex Asyncronous callback functions. Observables works as the major part of RxJS.

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


 2) Conditional Operators:
  -> For use-cases that depend on a specific condition to be met, these operators do the trick.

  Operators Types:

  => defaultIfEmpty - if an observable emits without any next value, this operator will emits a default value.
  Ex: ./defaultIfEmpty/app.js

  => every - returns an Observable that emits whether or not every item of the source satisfies the condition specified.
  Ex: ./every/app.js

  3) Creation Operators:
   -> These operators allow the creation of an observable from nearly anything. From generic to specific use-cases you are free,   and encouraged, to turn everything into a stream.

   Operators Types:

  => create - Create custom Observable, that does whatever you like, that will execute the specified function when an Observer subscribes to it.
  Ex: ./create/app.js

  => empty - creates an observable that emits nothing and immediately emits a complete notification.
  Ex: ./empty/app.js

  => from - Converts almost anything to an Observable.
  Ex: ./from/app.js

  => fromEvent - creates an observable from DOM events(mouse clicks or any other events).
  Ex: ./fromEvent/app.js

  => fromPromise - returns an observable that just emits the promise resolved values and then completes(Converts a Promise to an Observable).
  Ex: ./fromPromise/app.js

  => interval - creates an observable that emits a sequencial numbers in a given time interval.
  Ex: ./interval/app.js

  => of - creates an observable that emits the values which is given as an argument and then completes.
  Ex: ./of/app.js

  => range - creates an observable that emits a sequence of numbers for a specified range.
  Ex: ./range/app.js

  => throw - creates an observable that emits only errors.
  Ex: ./throw/app.js

  => timer - creates an observable that starts emiting a value at specified intial delay and emits ever incresing number as act as an interval.
  Ex: ./timer/app.js