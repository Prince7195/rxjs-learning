const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000));

// after all observables completed, it gives a last emitted value from each in a array 
const fork = Rx.Observable.forkJoin(
     //emit 'Hello' immediately
    Rx.Observable.of('Hello'),
    //emit 'World' after 1 second
    Rx.Observable.of('World').delay(1000),
    //emit 0 after 1 second
    Rx.Observable.interval(1000).take(1),
    //emit 0...1 in 1 second interval
    Rx.Observable.interval(1000).take(2),
    //promise that resolves to 'Promise Resolved' after 5 seconds
    myPromise('RESULT')
);

var subscription = fork.subscribe(
    (val) => {
        console.log(val);
    }
);
//output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]