// creating an observable emits only evev numbers at every 1 sec interval
const newObservable = Rx.Observable.create(
    (observer) => {
        let value = 0;
        const interval = setInterval(
            () => {
                if(value % 2 == 0)
                    observer.next(value);
                value++;
            },1000
        );
        return () => clearInterval(interval);        
    }    
);

const subscription = newObservable.subscribe(
    val => {
        console.log(val)
    }
);

// output> 0, 2, 4, 6, ...

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);