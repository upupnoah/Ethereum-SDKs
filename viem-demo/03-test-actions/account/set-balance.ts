// https://viem.sh/docs/actions/test/setBalance

import { parseEther } from "npm:viem";
import { testClient } from "../../clients/test-client.ts";

await testClient.setBalance({
  address: "0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC",
  value: parseEther("1"),
});
