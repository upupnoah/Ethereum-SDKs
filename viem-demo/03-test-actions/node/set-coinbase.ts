// https://viem.sh/docs/actions/test/setCoinbase
import { testClient } from "../../clients/test-client.ts";

await testClient.setCoinbase({
  address: "0xe846c6fcf817734ca4527b28ccb4aea2b6663c79",
});
