// https://viem.sh/docs/actions/wallet/getAddresses

import { walletClient } from "../../clients/wallet-client.ts";

const accounts = await walletClient.getAddresses() 
console.log(accounts);