import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getBlockTransactionCount

const count = await publicClient.getBlockTransactionCount();
console.log(count);

const count1 = await publicClient.getBlockTransactionCount({
  blockHash:
    "0x4f753a4fc92152751ffd0203ea1f02e0faf0ddca25726c4827d7d6af84895407",
});

console.log(count1);

const count2 = await publicClient.getBlockTransactionCount({
  blockNumber: 6024545n,
});
console.log(count2);

const count3 = await publicClient.getBlockTransactionCount({
  blockTag: "safe",
});

console.log(count3);
