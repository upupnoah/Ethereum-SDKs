import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getChainId

const chainId = await publicClient.getChainId();
console.log(chainId);
