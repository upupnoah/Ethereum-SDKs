import { publicClient } from "../../clients/public-client.ts";

// https://viem.sh/docs/actions/public/getProof

const proof = await publicClient.getProof({
  address: "0x4200000000000000000000000000000000000016", // State Trie
  storageKeys: [
    "0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99",
  ],
});

console.log(proof);
