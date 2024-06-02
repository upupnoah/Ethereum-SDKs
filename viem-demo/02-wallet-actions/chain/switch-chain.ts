// https://viem.sh/docs/actions/wallet/switchChain

import { avalanche } from "npm:viem/chains";
import { walletClient } from "../../clients/wallet-client.ts";

await walletClient.switchChain({ id: avalanche.id });
