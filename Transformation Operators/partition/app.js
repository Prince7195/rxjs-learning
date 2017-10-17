const source = Rx.Observable.from([1,2,3,4,5,6,7]);
// emits 1,2,3,4,5,6,7

const [even, odd] = source.partition(val => val % 2 === 0);
// check value is even and assigns to the first parameter and remaining to second
// condition is givin based on first parameter

const subscription = Rx.Observable.merge(
    even.map(val => `Even: ${val}`),
    odd.map(val => `Odd: ${val}`)
).subscribe(
    val => console.log(val)
);

/*
  Output:
  "Even: 2"
  "Even: 4"
  "Even: 6"
  "Odd: 1"
  "Odd: 3"
  "Odd: 5"
  "Odd: 7"
*/