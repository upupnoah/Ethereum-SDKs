import { formatEther } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getGasPrice

const gasPrice = await publicClient.getGasPrice();
console.log(`Gas price: ${formatEther(gasPrice)} Ether`);
