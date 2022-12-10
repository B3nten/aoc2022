import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
);

const parsedInput = input.split("\n").map((line) => {
	const [dir, distance] = line.split(" ");
	return [dir, parseInt(distance)] as const;
});

const directions = {
	U: {x: 0, y: 1},
	D: {x: 0, y: -1},
	L: {x: -1, y: 0},
	R: {x: 1, y: 0},
};

let head = {x: 0, y: 0};
let tail = {x: 0, y: 0};
const acc: [number, number][] = [];

for (const [dir, distance] of parsedInput) {
	for (let i = 0; i < distance; i++) {
		head.x = head.x + directions[dir as keyof typeof directions].x;
		head.y = head.y + directions[dir as keyof typeof directions].y;
		// need to let tail catch up
		if(head.x - tail.x > 1 ) {
			// move tail to the right
			tail.x += 1
			tail.y = head.y
		}
		if(head.x - tail.x < -1 ) {
			// move tail to the left
			tail.x -= 1
			tail.y = head.y
		}
		if(head.y - tail.y > 1 ) {
			// move tail up
			tail.y += 1
			tail.x = head.x
		}
		if(head.y - tail.y < -1 ) {
			// move tail down
			tail.y -= 1
			tail.x = head.x
		}
		acc.push([tail.x, tail.y]);
	}
}

const unique = []
for (const [x, y] of acc) {
	if(!unique.find(([ux, uy]) => ux === x && uy === y)) {
		unique.push([x, y])
	}
}
console.log(unique.length);

