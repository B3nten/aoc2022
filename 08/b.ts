import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
);

const trees = input.split("\n").map((line) => line.split(""));

let acc = 0

for (const [i, row] of trees.entries()) {
	if (i === 0 || i === trees.length - 1) continue;
	for (const [j, tree] of row.entries()) {
		if (j === 0 || j === row.length - 1) continue;
		const [before, after] = [row.slice(0, j).reverse(), row.slice(j + 1, row.length)];
		const [above, below] = [
			trees.slice(0, i).map((r) => r[j]).reverse(),
			trees.slice(i + 1).map((r) => r[j]),
		];
		let left = 0;
		let right = 0;
		let up = 0;
		let down = 0;
		for(const t of before){
			if(parseInt(tree) > parseInt(t)){
				left++
			}else{
				left++
				break
			}
		}
		for(const t of after){
			if(parseInt(tree) > parseInt(t)){
				right++
			}else{
				right++
				break
			}
		}
		for(const t of above){
			if(parseInt(tree) > parseInt(t)){
				up++
			}else{
				up++
				break
			}
		}
		for(const t of below){
			if(parseInt(tree) > parseInt(t)){
				down++
			}else{
				down++
				break
			}
		}
		acc = left*right*up*down > acc ? left*right*up*down : acc
	}
}
console.log(acc);