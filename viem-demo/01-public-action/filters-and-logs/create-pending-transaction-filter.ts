import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/createPendingTransactionFilter

const filter = await publicClient.createPendingTransactionFilter() 
console.log(filter);