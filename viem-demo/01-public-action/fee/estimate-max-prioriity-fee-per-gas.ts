import { publicClient } from "../../clients/public-client.ts";
import { formatEther } from "npm:viem";

// https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas

const maxPriorityFeePerGas = await publicClient.estimateMaxPriorityFeePerGas();
console.log(maxPriorityFeePerGas);
console.log(`${formatEther(maxPriorityFeePerGas)} Ether`);
