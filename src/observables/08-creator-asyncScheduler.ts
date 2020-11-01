import { async, asyncScheduler } from "rxjs";

// Executes the function after 2s
const gretting = () => console.log(`Hello world`);
asyncScheduler.schedule(gretting, 1000);

// Executes the function after 2s passing the state as the 4rd parameter
const greeting2 = (name) => console.log(`Hello ${name}`);
asyncScheduler.schedule(greeting2, 2000, "Frank");

// Executes the function after 2s with an object as state
const greeting3 = ({ name, surname }) => console.log(`Hello ${name}`);
asyncScheduler.schedule(greeting3, 2000, { name: "Frank", surname: "Dieguez" });

// The action CANNOT be an arrow function
const subs = asyncScheduler.schedule(
  function (state) {
    console.log({ state });

    if (state > 10) {
      this.unsubscribe();
    }

    this.schedule(state + 1, 1000);
  },
  3000,
  0,
);

// Stop the scheduler after 6s
// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);
asyncScheduler.schedule(() => subs.unsubscribe, 6000);
