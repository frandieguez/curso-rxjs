import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]", error),
  complete: () => console.info("[completed]"),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  //   throw new Error();
  subs.next("Mundo");

  subs.complete(); // No events will be notified after complete

  subs.next("Hola");
  subs.next("Mundo");
});

// Attach observer as an object defined previously
obs$.subscribe(observer);

// Attach the observer as 3 callback arguments
// obs$.subscribe(
//   (resp) => {
//     console.log("next: ", resp);
//   },
//   (error) => {
//     console.warn("error", error);
//   },
//   () => {
//     console.info("completed");
//   }
// );
