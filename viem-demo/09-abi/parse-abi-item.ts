// https://viem.sh/docs/abi/

import { parseAbiItem } from "npm:viem";

const abiItem = parseAbiItem(
  //  ^? const abiItem: { name: "balanceOf"; type: "function"; stateMutability: "view";...
  "function balanceOf(address owner) view returns (uint256)",
);

console.log(abiItem);
