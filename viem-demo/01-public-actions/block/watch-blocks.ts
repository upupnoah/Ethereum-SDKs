import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/watchBlocks

const unwatch = publicClient
  .watchBlocks(
    { onBlock: (block) => console.log(block) },
  );

setTimeout(() => {
  unwatch();
}, 30000);
