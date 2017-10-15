RxJS - It is a reactive javascript library for Events and complex Asyncronous callback functions. Observables works as the major part of RxJS.

Operators:
 * Oprerator is working behin the Observables.
 * .map(), .merge() etc,.

 Major Operator Types:

 1) Combination Operators:
  -> joining of information of multiple observables.

  Operators Types:

  => combineAll - combines multiple observables to create new observable that combines the latest emited values of the input observable.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/combineAll/app.js

  => combineLatest - converts higher order observable to forst order observable and waits for the completion of outer observable to emit the output.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/combineLatest/app.js

  => concat - creates an output observable that concats all observable emited values in sequential order one observale after another.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/concat/app.js

  => concatAll - converts higher order observable to first order observable and combines all inner observables in order.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/concatAll/app.js

  => forkJoin - coverts almost anything to an observable and emits in a array.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/forkJoin/app.js

  => merge - creates an observable the combines all the emitted values from the input observables.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/merge/app.js

  => mergeAll - converts higher order observable to first order observable that delivers all values emitted by the inner observables.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/mergeAll/app.js

  => pairwise - puts the current value and next value as an array and emits it.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/pairwise/app.js

  => race - returns an observable that mirrors the first source observable emits that occured with multiple of observables and ignores other.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/race/app.js

  => startWith - returns an observable that emits the output concating the startwith value as prefix to the actual output.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/startWith/app.js

  => withLatestFrom - whenever the source observable emits the value it combines with the latest emitted value of another observable.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/withLatestFrom/app.js

  => zip - combines multiple observable and createa an observable that collets all values emitted by inner observables and emits in a array.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Combination%20Operators/zip/app.js


 2) Conditional Operators:
  -> For use-cases that depend on a specific condition to be met, these operators do the trick.

  Operators Types:

  => defaultIfEmpty - if an observable emits without any next value, this operator will emits a default value.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Conditional%20Operators/defaultIfEmpty/app.js

  => every - returns an Observable that emits whether or not every item of the source satisfies the condition specified.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Conditional%20Operators/every/app.js

  3) Creation Operators:
   -> These operators allow the creation of an observable from nearly anything. From generic to specific use-cases you are free,   and encouraged, to turn everything into a stream.

   Operators Types:

  => create - Create custom Observable, that does whatever you like, that will execute the specified function when an Observer subscribes to it.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/create/app.js

  => empty - creates an observable that emits nothing and immediately emits a complete notification.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/empty/app.js

  => from - Converts almost anything to an Observable.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/from/app.js

  => fromEvent - creates an observable from DOM events(mouse clicks or any other events).
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/fromEvent/app.js

  => fromPromise - returns an observable that just emits the promise resolved values and then completes(Converts a Promise to an Observable).
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/fromPromise/app.js

  => interval - creates an observable that emits a sequencial numbers in a given time interval.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/interval/app.js

  => of - creates an observable that emits the values which is given as an argument and then completes.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/of/app.js

  => range - creates an observable that emits a sequence of numbers for a specified range.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/range/app.js

  => throw - creates an observable that emits only errors.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/throw/app.js

  => timer - creates an observable that starts emiting a value at specified intial delay and emits ever incresing number as act as an interval.
  Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Creation%20Operators/timer/app.js

  4) Error Handling Operators:
   -> Errors are an unfortunate side-effect of development. These operators provide effective ways to gracefully handle errors     and retry logic, should they occur.

   Operators Types:

   => catch - handles error in observable sequence. Note: Remember to return an observable from the catch function.
   Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Error%20Handling%20Operators/catch/app.js

   => retry - returns an observable that resubscribes as mentioned number of times when any error occurs.
   Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Error%20Handling%20Operators/retry/app.js

   => retryWhen - returns an observable that resubscribes on custom criteria when any error occurs.
   Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Error%20Handling%20Operators/retryWhen/app.js

  5) Multicasting Operators:
   -> In RxJS, observables are cold or unicast by default. These operators can make an observable hot, or multicast, allowing      side-effects to be share among multiple subscribers.
   
  Operators Types:

  => publish - Share source and make hot by calling connect.
   Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Multicasting%20Operators/publish/app.js

  => multicast - Share source utilizing the provided Subject.
   Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Multicasting%20Operators/multicast/app.js

  => share - Share source among multiple subscribers.
   Ex: https://github.com/Prince7195/rxjs-learning/tree/master/Multicasting%20Operators/share/app.js