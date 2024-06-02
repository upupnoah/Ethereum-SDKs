// https://viem.sh/docs/abi/encodeAbiParameters
import { encodeAbiParameters, parseAbiParameters } from "npm:viem";

const encodedData = encodeAbiParameters(
  [
    { name: "x", type: "string" },
    { name: "y", type: "uint" },
    { name: "z", type: "bool" },
  ],
  ["wagmi", 420n, true],
);

// human readable
const encodedData2 = encodeAbiParameters(
  parseAbiParameters("string x, uint y, bool z"),
  ["wagmi", 420n, true],
);

console.log(encodedData);
console.log(encodedData2);
