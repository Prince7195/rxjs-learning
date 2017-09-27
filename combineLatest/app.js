const timerOne = Rx.Observable.timer(1000, 4000); // generates first value at 1'st sec and next values for every 4 sec's
const timerTwo = Rx.Observable.timer(2000, 4000); // generates first value at 2'nd sec and next values for every 4 sec's
const timerThree = Rx.Observable.timer(3000, 4000); // generates first value at 3'rd sec and next values for every 4 sec's

const combined = Rx.Observable.combineLatest(
    timerOne,
    timerTwo,
    timerThree
); // passing all the observables to an operator

// combineLatest returns the value in an array by combining all values
// updates only the latest changed values
const subscribe = combined.subscribe(
   latestValues => {
    const [timerValOne, timerValTwo, timerValThree] = latestValues; // storing the output array values to constant array
    console.log(
        `Timer One Latest: ${timerValOne}, 
         Timer Two Latest: ${timerValTwo}, 
         Timer Three Latest: ${timerValThree}`
       );
   }
);