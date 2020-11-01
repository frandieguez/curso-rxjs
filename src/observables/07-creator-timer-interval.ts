import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("completed"),
};

// Generates number per second
// const interval$ = interval(1000);

// Generates a sequence of int waiting 2s and then one number per second
// const timer$ = timer(2000, 1000);

// Generates a sequence of int waiting in5seconds and then one number per second
const in5seconds = new Date();
in5seconds.setSeconds(in5seconds.getSeconds() + 5);
const timer$ = timer(in5seconds, 1000);

console.log("Start");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("End");
