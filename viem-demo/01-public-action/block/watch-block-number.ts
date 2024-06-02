import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/watchBlockNumber

const unwatch = publicClient.watchBlockNumber(
  {
    emitMissed: true, // 在错过区块号时也要触发回调
    onBlockNumber: (blockNumber) => console.log(blockNumber),
  },
);

// 30s 之后 unwatch
setTimeout(() => {
  unwatch();
}, 30000);
