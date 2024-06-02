// https://viem.sh/docs/actions/wallet/signMessage

import { walletClient } from "../../clients/wallet-client.ts";

const [account] = await walletClient.getAddresses();

const signature_1 = await walletClient.signMessage({
  account,
  message: "hello world",
});
const signature_2 = await walletClient.signMessage({
  account,
  // Hex data representation of message.
  message: { raw: "0x68656c6c6f20776f726c64" },
});

console.log(signature_1);
console.log(signature_2);
