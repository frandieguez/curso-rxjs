import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<any>(
  [1, 2],
  { a: 1, b: 2 },
  () => {},
  true,
  Promise.resolve(true),
);

/**
 * These starting/ending logs demostrates that observables can
 * work on sync mode
 */
console.log("Starting of the obs$");

obs$.subscribe(
  (next) => console.log("next", next),
  null,
  () => console.log("ending sequence"),
);

console.log("Ending of the obs$");
