RxJS - It is a reactive javascript library for Events and complex Asyncronous callback functions. Observables works as the major part of RxJS.

Operators:
 * Oprerator is working behin the Observables.
 * .map(), .merge() etc,.

 Major Operator Types:

 1) Combination Operators:
  -> joining of information of multiple observables.

  Operators Types:

  => combineAll - combines multiple observables to create new observable that combines the latest emited values of the input observable.
  Ex: ./Combination Operators/combineAll/app.js

  => combineLatest - converts higher order observable to forst order observable and waits for the completion of outer observable to emit the output.
  Ex: ./Combination Operators/combineLatest/app.js

  => concat - creates an output observable that concats all observable emited values in sequential order one observale after another.
  Ex: ./Combination Operators/concat/app.js

  => concatAll - converts higher order observable to first order observable and combines all inner observables in order.
  Ex: ./Combination Operators/concatAll/app.js

  => forkJoin - coverts almost anything to an observable and emits in a array.
  Ex: ./Combination Operators/forkJoin/app.js

  => merge - creates an observable the combines all the emitted values from the input observables.
  Ex: ./Combination Operators/merge/app.js

  => mergeAll - converts higher order observable to first order observable that delivers all values emitted by the inner observables.
  Ex: ./Combination Operators/mergeAll/app.js

  => pairwise - puts the current value and next value as an array and emits it.
  Ex: ./Combination Operators/pairwise/app.js

  => race - returns an observable that mirrors the first source observable emits that occured with multiple of observables and ignores other.
  Ex: ./Combination Operators/race/app.js

  => startWith - returns an observable that emits the output concating the startwith value as prefix to the actual output.
  Ex: ./Combination Operators/startWith/app.js

  => withLatestFrom - whenever the source observable emits the value it combines with the latest emitted value of another observable.
  Ex: ./Combination Operators/withLatestFrom/app.js

  => zip - combines multiple observable and createa an observable that collets all values emitted by inner observables and emits in a array.
  Ex: ./Combination Operators/zip/app.js


 2) Conditional Operators:
  -> For use-cases that depend on a specific condition to be met, these operators do the trick.

  Operators Types:

  => defaultIfEmpty - if an observable emits without any next value, this operator will emits a default value.
  Ex: ./Conditional Operators/defaultIfEmpty/app.js

  => every - returns an Observable that emits whether or not every item of the source satisfies the condition specified.
  Ex: ./Conditional Operators/every/app.js

  3) Creation Operators:
   -> These operators allow the creation of an observable from nearly anything. From generic to specific use-cases you are free,   and encouraged, to turn everything into a stream.

   Operators Types:

  => create - Create custom Observable, that does whatever you like, that will execute the specified function when an Observer subscribes to it.
  Ex: ./Creation Operators/create/app.js

  => empty - creates an observable that emits nothing and immediately emits a complete notification.
  Ex: ./Creation Operators/empty/app.js

  => from - Converts almost anything to an Observable.
  Ex: ./Creation Operators/from/app.js

  => fromEvent - creates an observable from DOM events(mouse clicks or any other events).
  Ex: ./Creation Operators/fromEvent/app.js

  => fromPromise - returns an observable that just emits the promise resolved values and then completes(Converts a Promise to an Observable).
  Ex: ./Creation Operators/fromPromise/app.js

  => interval - creates an observable that emits a sequencial numbers in a given time interval.
  Ex: ./Creation Operators/interval/app.js

  => of - creates an observable that emits the values which is given as an argument and then completes.
  Ex: ./Creation Operators/of/app.js

  => range - creates an observable that emits a sequence of numbers for a specified range.
  Ex: ./Creation Operators/range/app.js

  => throw - creates an observable that emits only errors.
  Ex: ./Creation Operators/throw/app.js

  => timer - creates an observable that starts emiting a value at specified intial delay and emits ever incresing number as act as an interval.
  Ex: ./Creation Operators/timer/app.js