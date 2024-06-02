import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/createEventFilter

const filter = await publicClient.createEventFilter();
console.log(filter);