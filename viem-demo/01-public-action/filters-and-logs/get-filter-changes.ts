import { publicClient } from "../../clients/public-client.ts";

const filter = await publicClient.createBlockFilter();
const hashes = await publicClient.getFilterChanges({ filter });
console.log(hashes);
