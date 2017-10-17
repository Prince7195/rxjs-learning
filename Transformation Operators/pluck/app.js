const source = Rx.Observable.from([
    {name: 'Joe', age: 30},
    {name: 'Sarah', age:35}
  ]);
  //grab names
  const example = source.pluck('name');
  //output: "Joe", "Sarah"
  const subscribe = example.subscribe(val => console.log(val));
  