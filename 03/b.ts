import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
);
const letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
const rucksacks = input.split("\n").reduce((acc, next, index) => {
	if (index % 3 === 0) {
		acc.push([next]);
	} else {
		acc[acc.length - 1].push(next);
	}
	return acc;
}, []) as string[][];
let acc = 0;
for (const sack of rucksacks) {
	const common = sack[0]
		.split("")
		.filter((char) => sack[1].includes(char) && sack[2].includes(char));
	acc += letters.indexOf(common[0]) + 1;
}
console.log(acc);
