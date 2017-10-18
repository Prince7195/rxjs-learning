const source = Rx.Observable.from([
    Rx.Notification.createNext('SUCCESS'),
    Rx.Notification.createError('ERROR')
])
// emits next and error notifications
.dematerialize();
// turns notification objects ito notification values

const subscription = source.subscribe(
    nxt => console.log(`Next Value: ${nxt}`),
    err => console.log(`Error Value: ${err}`)
);