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
	U: { x: 0, y: 1 },
	D: { x: 0, y: -1 },
	L: { x: -1, y: 0 },
	R: { x: 1, y: 0 },
};

const rope = [
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
	{ x: 0, y: 0 },
];

const acc = new Set<string>();

for (const [dir, distance] of parsedInput) {
	for (let i = 0; i < distance; i++) {
		rope[0].x += directions[dir as keyof typeof directions].x;
		rope[0].y += directions[dir as keyof typeof directions].y;
		for(let i = 0; i < rope.length - 1; i++) {
			const deltaX = rope[i].x - rope[i + 1].x;
			const deltaY = rope[i].y - rope[i + 1].y;
			if(Math.abs(deltaX) > 1) {
				rope[i + 1].x += deltaX > 0 ? 1 : -1;
				if(Math.abs(deltaY) !== 0) rope[i + 1].y += deltaY > 0 ? 1 : -1;
			} else if(Math.abs(deltaY) > 1) {
				rope[i + 1].y += deltaY > 0 ? 1 : -1;
				if(Math.abs(deltaX) !== 0) rope[i + 1].x += deltaX > 0 ? 1 : -1;
			}
			acc.add(`${rope[9].x},${rope[9].y}`)
		}
	}
}

console.log(acc.size);