import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
  fromFileUrl(import.meta.resolve("./input.txt")),
);

const pairs = input.split("\n").map((x) => x.split(","));

let acc = 0;
for (const pair of pairs) {
  const [a, b] = pair;
  const a1 = parseInt(a.split("-")[0]);
  const a2 = parseInt(a.split("-")[1]);
  const b1 = parseInt(b.split("-")[0]);
  const b2 = parseInt(b.split("-")[1]);

  if (a1 >= b1 && a2 <= b2) {
    acc++;
    continue;
  }
  if (b1 >= a1 && b2 <= a2) {
    acc++;
    continue;
  }
  if (b1 <= a1 && b2 >= a1) {
    acc++;
    continue;
  }
  if (b1 <= a2 && b2 >= a2) {
    acc++;
    continue;
  }
}
console.log(acc);
