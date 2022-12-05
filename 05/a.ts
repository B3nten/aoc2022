import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
  fromFileUrl(import.meta.resolve("./input.txt")),
);
const stacks = `
        [F] [Q]         [Q]        
[B]     [Q] [V] [D]     [S]        
[S] [P] [T] [R] [M]     [D]        
[J] [V] [W] [M] [F]     [J]     [J]
[Z] [G] [S] [W] [N] [D] [R]     [T]
[V] [M] [B] [G] [S] [C] [T] [V] [S]
[D] [S] [L] [J] [L] [G] [G] [F] [R]
[G] [Z] [C] [H] [C] [R] [H] [P] [D]
`
  .replaceAll("\r", " \r")
  .match(/.{1,4}/g)!
  .reduce((acc, current, i) => {
    const trimmed = current.replace("[", "").replace("]", "").trim();
    if (!trimmed) return acc;
    acc[i % 9] = [...(acc[i % 9] || []), trimmed];
    return acc;
  }, [] as string[][]);

for (const line of input.split("\n")) {
  const [amount, start, end] = line
    .split(" ")
    .filter(Number)
    .map((e) => parseInt(e));
  const elements = stacks[start - 1].splice(0, amount).reverse();
  stacks[end - 1].unshift(...elements);
}

console.log(stacks.map((e) => e[0]).join(""));
