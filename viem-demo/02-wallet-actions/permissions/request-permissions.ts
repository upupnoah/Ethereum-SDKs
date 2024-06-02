// https://viem.sh/docs/actions/wallet/requestPermissions

import { walletClient } from "../../clients/wallet-client.ts";

const permissions = await walletClient.requestPermissions({ eth_accounts: {} });
console.log(permissions);
