// https://viem.sh/docs/actions/test/impersonateAccount

import { testClient } from "../../clients/test-client.ts";

await testClient.impersonateAccount({
  address: "0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC",
});
