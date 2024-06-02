// https://viem.sh/docs/actions/wallet/sendTransaction

import { walletClient } from "../../clients/wallet-client.ts";

const [account] = await walletClient.getAddresses();

const hash = await walletClient.sendTransaction({
  data: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // call contract function
  account,
  to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
  value: 1000000000000000000n,
});

console.log(hash);
