import { publicClient } from "../clients/public-client.ts";
import { parseAbiItem } from "npm:viem";

// 监听并打印特定智能合约（USDC合约）在以太坊主网上的最近10个区块内的转账事件。
// 它还包括错误处理，特别是在网络问题导致请求失败时会自动重试，最多重试10次

async function main() {
  const client = publicClient;
  const maxRetries = 10; // 最大重试次数
  let currentRetry = 0;
  while (currentRetry < maxRetries) {
    try {
      const currentBlockNumber = await client.getBlockNumber();
      console.log(`当前区块高度：${currentBlockNumber}`);

      const filterParams = {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0CE3606eb48" as `0x${string}`,
        event: parseAbiItem(
          "event Transfer(address indexed from, address indexed to, uint256 value)",
        ),
        fromBlock: currentBlockNumber - BigInt(10),
        toBlock: currentBlockNumber,
      };

      const filter = await client.createEventFilter(filterParams);
      const logs = await client.getFilterLogs({ filter });
      // console.log(logs);

      logs.forEach((log) => {
        const from = log.args.from;
        const to = log.args.to;
        const value = Number(log.args.value) / 1e6; // 转换为更可读的格式
        const transactionId = log.transactionHash;

        console.log(
          `从 ${from} 转账给 ${to} ${value} USDC, 交易ID：${transactionId}`,
        );
      });
      break; // 成功完成，退出循环
    } catch (error) {
      console.error(`尝试次数 ${currentRetry + 1}，发生错误：${error.message}`);
      currentRetry++;
      if (currentRetry >= maxRetries) {
        console.error("已达到最大重试次数，停止尝试。");
      } else {
        console.log("正在重试...");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 等待2秒后重试
      }
    }
  }
}

main();
