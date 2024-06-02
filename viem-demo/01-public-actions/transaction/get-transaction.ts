import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getTransaction
const transaction = await publicClient.getTransaction({
  hash: "0x15928180aca3a8bc880ef36d4ef2e9cf0015bca563272bc131e8714de26bf0e0",
});

console.log(transaction);
