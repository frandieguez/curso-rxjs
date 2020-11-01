import { of, from } from "rxjs";

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = from("Frank Dieguez");
// source$.subscribe((resp) => {
//   console.log(resp);
// });

// const source$ = from(fetch("https://api.github.com/users/frandieguez"));
// source$.subscribe(async (resp) => {
//   console.log(await resp.json());
// });

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();
for (let id of myIterable) {
  console.log(id);
}
from(myIterable).subscribe(observer);
