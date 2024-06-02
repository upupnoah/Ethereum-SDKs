import { publicClient } from "../../clients/public-client.ts";
import { formatEther } from "npm:viem";

// https://viem.sh/docs/actions/public/estimateFeesPerGas

const {
  maxFeePerGas,
  maxPriorityFeePerGas,
} = await publicClient.estimateFeesPerGas();

console.log(maxFeePerGas, maxPriorityFeePerGas);

// formatEther
console.log(
  formatEther(maxFeePerGas ?? 0n),
  formatEther(maxPriorityFeePerGas ?? 0n),
);
