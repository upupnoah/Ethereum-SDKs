import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/call

const account = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const data = await publicClient.call({
  account,
  data: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
});

console.log(data);
