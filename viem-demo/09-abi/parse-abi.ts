// https://viem.sh/docs/abi/parseAbi

import { parseAbi } from "npm:viem";

// 将人类可读的 ABI 解析成 JSON ABI
const abi = parseAbi([
  //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
  "function balanceOf(address owner) view returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 amount)",
]);
console.log(abi);
