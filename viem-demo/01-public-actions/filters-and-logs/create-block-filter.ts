import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/createBlockFilter

const filter = await publicClient.createBlockFilter();
console.log(filter);

// await publicClient.getFilterChanges({
//   filter: filter,
// });
