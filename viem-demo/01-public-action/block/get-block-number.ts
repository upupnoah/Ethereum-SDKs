import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getBlockNumber

const blockNumber = await publicClient.getBlockNumber();
console.log(blockNumber);