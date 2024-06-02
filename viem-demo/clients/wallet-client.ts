import { createWalletClient, custom, http, publicActions } from "npm:viem";
import { mainnet, sepolia } from "npm:viem/chains";
import { sepoliaHttpRpcUrl } from "../utils/rpc-url.ts";

export const walletClient = createWalletClient({
  chain: sepolia,
  // transport: http(),
  transport: http(sepoliaHttpRpcUrl),
  // transport: custom(window.ethereum!),
}).extend(publicActions);
