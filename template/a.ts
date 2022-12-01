import { fromFileUrl } from "path";
import * as _ from "lodash"
const input = await Deno.readTextFile(
  fromFileUrl(import.meta.resolve("./input.txt")),
);

console.log(input);

