import { publicClient } from "../clients/public-client.ts";

// 在 Deno 中，顶层 await 是允许的
const blockNumber = await publicClient.getBlockNumber();
console.log(blockNumber);
