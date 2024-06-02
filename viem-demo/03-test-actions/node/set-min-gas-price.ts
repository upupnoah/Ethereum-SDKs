// https://viem.sh/docs/actions/test/setMinGasPrice

import { parseGwei } from "npm:viem";
import { testClient } from "../../clients/test-client.ts";

await testClient.setMinGasPrice({
  gasPrice: parseGwei("20"),
});
