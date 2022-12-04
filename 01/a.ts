import { fromFileUrl } from "path";
const input = await Deno.readTextFile(
  fromFileUrl(import.meta.resolve("./input.txt")),
);

const elfArray = input.split("\n\n");
const elfCalorieArray = [];
for (const elf in elfArray) {
  const calories = elfArray[elf]
    .split("\n")
    .reduce((a, b) => Number(a) + Number(b), 0);
  elfCalorieArray.push(calories);
}
console.log(elfCalorieArray.sort((a, b) => b - a));
