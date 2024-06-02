import { parseAbiItem } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";

const currentBlockNumber = await publicClient.getBlockNumber();

const filter = await publicClient.createEventFilter({
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
  event: parseAbiItem(
    "event Transfer(address indexed, address indexed, uint256)",
  ),
  fromBlock: currentBlockNumber - BigInt(1),
  toBlock: "latest",
});

const logs = await publicClient.getFilterLogs({ filter });
logs.forEach((log) => {
  console.log(log);
});
