// https://viem.sh/docs/abi/getAbiItem

import { getAbiItem } from "npm:viem";

const encodedData = getAbiItem({
  abi: [
    {
      name: "x",
      type: "function",
      inputs: [{ type: "uint256" }],
      outputs: [],
      stateMutability: "payable",
    },
    {
      name: "y",
      type: "event",
      inputs: [{ type: "address" }],
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
    },
    {
      name: "z",
      type: "function",
      inputs: [{ type: "string" }],
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
    },
  ],
  name: "y", // 获取的 abi 项的名称
});

console.log(encodedData);
/**
 * {
 *  name: 'y',
 *  type: 'event',
 *  inputs: [{ type: 'address' }],
 *  outputs: [{ type: 'uint256' }],
 *  stateMutability: 'view'
 * }
 */
