import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
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
const result = rounds.reduce((acc, current) => {
	if (current[0] === current[1]) {
		return acc + current[1] + 3;
	}
	if (current[0] - current[1] === 1 || current[0] - current[1] === -2) {
		return acc + current[1];
	}
	return acc + current[1] + 6;
}, 0);
console.log(result);
