import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
);

let acc: string[] = [];
for (const [i, letter] of input.split("").entries()) {
	if (acc.find((l) => l === letter)) {
		acc = [letter];
		continue;
	}
  acc.push(letter);
  if(acc.length === 4){
    console.log(i);
    break
  }
}

