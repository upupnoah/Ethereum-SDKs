// https://viem.sh/docs/abi/parseAbiParameters

import { parseAbiParameters } from "npm:viem";

const abiParameters = parseAbiParameters(
  "address from, address to, uint256 amount",
);
console.log(abiParameters);

// [
//   { type: "address", name: "from" },
//   { type: "address", name: "to" },
//   { type: "uint256", name: "amount" },
// ]
