// https://viem.sh/docs/actions/public/verifyTypedData

// import { publicClient } from "../../clients/public-client.ts";
// import { walletClient } from "../../clients/wallet-client.ts";

// const [account] = await walletClient.getAddresses();

// // All properties on a domain are optional
// export const domain = {
//   name: "Ether Mail",
//   version: "1",
//   chainId: 1,
//   verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
// } as const;

// // The named list of all type definitions
// export const types = {
//   Person: [
//     { name: "name", type: "string" },
//     { name: "wallet", type: "address" },
//   ],
//   Mail: [
//     { name: "from", type: "Person" },
//     { name: "to", type: "Person" },
//     { name: "contents", type: "string" },
//   ],
// } as const;

// const message = {
//   from: {
//     name: "Cow",
//     wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
//   },
//   to: {
//     name: "Bob",
//     wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
//   },
//   contents: "Hello, Bob!",
// };

// const signature = await walletClient.signTypedData({
//   account,
//   domain,
//   types,
//   primaryType: "Mail",
//   message,
// });
// const valid = await publicClient.verifyTypedData({
//   address: account.address,
//   domain,
//   types,
//   primaryType: "Mail",
//   message,
//   signature,
// });
// // true
