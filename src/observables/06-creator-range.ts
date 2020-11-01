import { asyncScheduler, range } from "rxjs";

// const obs$ = range(1, 5); // Synchronous
const obs$ = range(1, 5, asyncScheduler); // Asynchronous

console.log("start");

obs$.subscribe((next) => {
  console.log(next);
});

console.log("end");
