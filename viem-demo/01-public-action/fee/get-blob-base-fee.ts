import { formatEther } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getBlobBaseFee

const baseFee = await publicClient.getBlobBaseFee();
console.log(baseFee);
console.log(`${formatEther(baseFee)} Ether`);
