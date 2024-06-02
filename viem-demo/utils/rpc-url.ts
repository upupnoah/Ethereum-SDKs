import { load } from "@std/dotenv";

const env = await load();
export const sepoliaHttpRpcUrl = env["HTTP_SEPOLIA_RPC_URL"];
export const sepoliaWssRpcUrl = env["WSS_SEPOLIA_RPC_URL"];
export const mainnetHttpRpcUrl = env["HTTP_MAINNET_RPC_URL"];
export const mainnetWssRpcUrl = env["WSS_MAINNET_RPC_URL"];
export const privateKey = env["PRIVATE_KEY"];
