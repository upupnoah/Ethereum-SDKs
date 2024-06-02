import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getFeeHistory

const feeHistory = await publicClient.getFeeHistory({
  blockCount: 4,
  rewardPercentiles: [25, 75],
});

console.log(feeHistory);
