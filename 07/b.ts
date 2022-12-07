import { fromFileUrl } from "path";
import * as _ from "lodash";
const input = await Deno.readTextFile(
	fromFileUrl(import.meta.resolve("./input.txt"))
);

const sizeMap: Record<string, number> = {};
let path = ["/"];
for (const line of input.split("\n")) {
	if (line.startsWith( "$ cd /")) path = ["/"];
	else if (line.startsWith("$ cd ..")) path.pop();
	else if (line.startsWith("$ cd ")) path.push(line.slice(5));
	else if(line.match(/^[0-9]/)) {
		const [size] = line.split(" ");
    for(const [i, chunk] of path.entries()){
      if(!sizeMap[path.slice(0, i) + chunk]){
        sizeMap[path.slice(0, i) + chunk] = 0;
      }
      sizeMap[path.slice(0, i) + chunk] += parseInt(size)
    }
	}
}

const x = (70000000 - sizeMap["/"] - 30000000)*-1
const result = Object.values(sizeMap).sort((a, b) => Math.abs(x - a) - Math.abs(x - b) )[0]
console.log("result", result)
