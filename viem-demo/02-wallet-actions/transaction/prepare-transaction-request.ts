// https://viem.sh/docs/actions/wallet/prepareTransactionRequest

import { walletClient } from "../../clients/wallet-client.ts";;

const [account] = await walletClient.getAddresses();

const request = await walletClient.prepareTransactionRequest({
  account,
  to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
  value: 1000000000000000000n,
});

console.log(request);
