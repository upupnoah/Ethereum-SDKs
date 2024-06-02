import { createPublicClient, http } from "npm:viem";
import { mainnet, sepolia } from "npm:viem/chains";
import { sepoliaHttpRpcUrl } from "../utils/rpc-url.ts";

export const publicClient = createPublicClient({
  batch: {
    multicall: true, // Optimize: enable multicall batching
  },
  // chain: mainnet,
  chain: sepolia,
  // transport: http(mainnetHttpRpcUrl),
  transport: http(sepoliaHttpRpcUrl),
  //   transport: webSocket(sepoliaWssRpcUrl),
});
