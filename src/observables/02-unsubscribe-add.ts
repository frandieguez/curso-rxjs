import { Observable, Observer } from "rxjs";

const observer: Observer<Number> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]", error),
  complete: () => console.info("[completed]"),
};

const intervalo$ = new Observable<Number>((subscriber) => {
  let values = 0;
  const interval = setInterval(() => {
    subscriber.next(values++);
    console.log(values);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Cleared interval");
  };
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// We concatenate the unsubscribe of all the subscriptions so when
// we cancel the subs1 the rest will be unsubscribed too.
subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  console.log("Completed timeout");
}, 6000);
