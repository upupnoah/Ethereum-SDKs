// https://viem.sh/docs/actions/wallet/addChain

import { avalanche } from "npm:viem/chains";
import { walletClient } from "../../clients/wallet-client.ts";

await walletClient.addChain({ chain: avalanche });
