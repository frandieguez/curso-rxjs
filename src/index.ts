import { fromEvent, range } from "rxjs";
import { map, pluck } from "rxjs/operators";

// range(1, 5).pipe(
//   map<number, string>((val) => `${val * 10}`),
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

keyup$.subscribe(console.log);

// Get the code using a map operator
// We need to assign the pipe to a constant cause it returns a subscriber
const keyupcode$ = keyup$.pipe(
  map((event) => event.code),
);
keyupcode$.subscribe((code) => console.log("map :", code));

// Pluck extracts a property from the object in the pipe
const keyupPluck$ = keyup$.pipe(
  pluck("key"),
);
keyupPluck$.subscribe((code) => console.log("pluck: ", code));

// Pluck extracts a property from the nested object in the pipe
const keyupPluckNested$ = keyup$.pipe(
  pluck("target", "baseURI"),
);
keyupPluckNested$.subscribe((code) => console.log("pluck nested: ", code));
