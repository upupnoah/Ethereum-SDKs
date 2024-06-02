// https://viem.sh/docs/abi/parseAbiParameter

import { parseAbiParameter } from "npm:viem";

const abiParameter = parseAbiParameter("address from");
console.log(abiParameter);

// { type: "address", name: "from" }