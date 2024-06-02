// https://viem.sh/docs/actions/wallet/

import { walletClient } from "../../clients/wallet-client.ts";

const permissions = await walletClient.getPermissions();
console.log(permissions);
