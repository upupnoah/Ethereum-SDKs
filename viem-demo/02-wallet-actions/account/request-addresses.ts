// https://viem.sh/docs/actions/wallet/requestAddresses

import { walletClient } from "../../clients/wallet-client.ts";

const accounts = await walletClient.requestAddresses();
console.log(accounts);
