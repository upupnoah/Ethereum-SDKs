import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getTransactionCount

const transactionCount = await publicClient.getTransactionCount({
  address: "0x3Dc121cA82697cB8C2C9D2b151bB6002316eC5A9",
});

console.log(transactionCount);
