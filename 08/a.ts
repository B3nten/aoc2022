import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
);

const trees = input.split("\n").map((line) => line.split(""));

let acc = trees.length * 2 + trees[0].length * 2 - 4;

for (const [i, row] of trees.entries()) {
	if (i === 0 || i === trees.length - 1) continue;
	for (const [j, tree] of row.entries()) {
		if (j === 0 || j === row.length - 1) continue;
		const [before, after] = [row.slice(0, j), row.slice(j + 1, row.length)];
		const [above, below] = [
			trees.slice(0, i).map((r) => r[j]),
			trees.slice(i + 1).map((r) => r[j]),
		];
		if (before.filter((t) => parseInt(t) >= parseInt(tree)).length === 0) {
			acc++;
			continue;
		} else if (
			after.filter((t) => parseInt(t) >= parseInt(tree)).length === 0
		) {
			acc++;
			continue;
		} else if (
			above.filter((t) => parseInt(t) >= parseInt(tree)).length === 0
		) {
			acc++;
			continue;
		} else if (
			below.filter((t) => parseInt(t) >= parseInt(tree)).length === 0
		) {
			acc++;
			continue;
		}
	}
}
console.log(acc);
