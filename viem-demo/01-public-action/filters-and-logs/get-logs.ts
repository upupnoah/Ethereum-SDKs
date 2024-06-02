import { parseAbiItem } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";

const logs = await publicClient.getLogs({
  address: "0x3Dc121cA82697cB8C2C9D2b151bB6002316eC5A9",
  event: parseAbiItem(
    "event Transfer(address indexed, address indexed, uint256)",
  ),
  //   args: {
  //     from: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  //     to: "0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac",
  //   },
  fromBlock: "earliest",
  toBlock: "latest",
});
logs.forEach((log) => {
  console.log(log);
});
