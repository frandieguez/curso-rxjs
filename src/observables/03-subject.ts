import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<Number> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]", error),
  complete: () => console.info("[completed]"),
};

const intervalo$ = new Observable<Number>((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log("cleared interval");
  };
});

/**
 * A Subject:
 * 1 - has multiple casting: sent to multiple subscribers
 * 2 - is an observer too: so it has next, complete, error
 */
const subject$ = new Subject<Number>();
const intervalSubject = intervalo$.subscribe(subject$);

/**
 * We subscribe all observers to the subject instead to the
 * Observer, so we get the same value on all subscriptions
 * Otherwise, each observer calls its own instance of the
 * callback in the Observable
 */
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();

  intervalSubject.unsubscribe();
}, 3500);
