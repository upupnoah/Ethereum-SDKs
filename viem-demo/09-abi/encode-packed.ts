// https://viem.sh/docs/abi/encodePacked

import { encodePacked } from "npm:viem";

encodePacked(
  ["address", "string", "bytes16[]"],
  [
    "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "hello world",
    [
      "0xdeadbeefdeadbeefdeadbeefdeadbeef",
      "0xcafebabecafebabecafebabecafebabe",
    ],
  ],
);
