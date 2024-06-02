import { parseEther } from "npm:viem";
import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/estimateGas

const account = "0x3Dc121cA82697cB8C2C9D2b151bB6002316eC5A9";

const gas = await publicClient.estimateGas({
  account,
  to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
  value: parseEther("1"),
});

console.log(gas);
