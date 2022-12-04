import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
  fromFileUrl(import.meta.resolve("./input.txt")),
);

const rounds = input.split("\n").map((round) =>
  round
    .replaceAll("A", 1)
    .replaceAll("B", 2)
    .replaceAll("C", 3)
    .replaceAll("X", 1)
    .replaceAll("Y", 2)
    .replaceAll("Z", 3)
    .split(" ")
    .map((n) => parseInt(n))
);
const loss = {
  1: 3,
  2: 1,
  3: 2,
};
const win = {
  1: 2,
  2: 3,
  3: 1,
};
const result = rounds.reduce((acc, current) => {
  console.log(current);
  if (current[1] === 2) {
    return acc + current[0] + 3;
  }
  if (current[1] === 1) {
    return acc + loss[current[0]];
  }
  return acc + win[current[0]] + 6;
}, 0);
console.log(result);
