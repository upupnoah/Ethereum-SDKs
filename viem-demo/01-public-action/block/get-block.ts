import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getBlock

const block = await publicClient.getBlock();
console.log(block);
