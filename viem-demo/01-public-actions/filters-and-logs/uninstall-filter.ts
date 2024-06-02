import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/uninstallFilter

const filter = await publicClient.createPendingTransactionFilter();
const uninstalled = await publicClient.uninstallFilter({
  filter,
});
console.log(uninstalled);
