import { formatEther } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getBalance

const balance = await publicClient.getBalance({
  address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  //   blockNumber: 69420n, // at block 69420
  blockTag: 'safe'
});
console.log(balance);

const balanceAsEther = formatEther(balance);
console.log(`${balanceAsEther} Ether`);
