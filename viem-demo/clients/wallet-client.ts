import { createWalletClient, custom } from "npm:viem";
import { sepolia } from "npm:viem/chains";

import { publicActions } from "npm:viem";

// 检查 Deno 环境
const isDeno = typeof Deno !== "undefined";

// 定义 ethereum 变量
// deno-lint-ignore no-explicit-any
let ethereum: any;

if (isDeno) {
  console.error("Deno environment detected. window.ethereum is not available.");
  // 在 Deno 环境中初始化一个 mock 或者处理逻辑
  ethereum = null; // 或者根据你的需求定义
} else {
  // deno-lint-ignore no-explicit-any
  ethereum = (window as any).ethereum;
}

let walletClient;

if (ethereum) {
  walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(ethereum),
  }).extend(publicActions);
} else {
  console.error(
    "Ethereum provider not found. Make sure you have MetaMask or another wallet installed.",
  );
  // 在这里处理没有找到 ethereum provider 的情况
  // 比如在 Deno 环境中初始化一个 mock 客户端
  walletClient = createWalletClient({
    chain: sepolia,
    transport: custom({
      request: () => {
        console.log("Mock request in Deno environment");
        // 模拟请求响应，根据你的需求返回相应的数据
        // return {};
        return Promise.resolve({});
      },
    }),
  }).extend(publicActions);
}

export { walletClient };
