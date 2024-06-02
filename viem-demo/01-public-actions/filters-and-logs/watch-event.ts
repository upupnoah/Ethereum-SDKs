import { parseAbiItem } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";
import { formatEther } from "npm:viem";

// https://viem.sh/docs/actions/public/watchEvent

const unwatch = publicClient.watchEvent({
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7" as `0x${string}`,
  event: parseAbiItem(
    "event Transfer(address indexed, address indexed, uint256)",
  ),
  onLogs: (logs) => {
    logs.forEach((log) => {
      const { eventName, args } = log;
      const [from, to, value] = args;
      console.log(
        `Event: ${eventName}, From: ${from}, To: ${to}, Value: ${
          formatEther(value ?? 0n)
        } Ether`,
      );
    });
  },
});

setTimeout(() => {
  unwatch();
}, 30000);
