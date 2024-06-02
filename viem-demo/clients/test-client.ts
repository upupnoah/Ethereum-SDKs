import { createTestClient, http } from "npm:viem";
import { foundry } from "npm:viem/chains";
import { publicActions } from "npm:viem";
import { walletActions } from "npm:viem";

export const testClient = createTestClient({
  chain: foundry,
  mode: "anvil",
  transport: http(), // localhost:8545
})
  .extend(publicActions)
  .extend(walletActions);

// const blockNumber = await testClient.getBlockNumber() // Public Action
// const hash = await testClient.sendTransaction({ ... }) // Wallet Action
// const mine = await testClient.mine({ blocks: 1 }) // Test Action
