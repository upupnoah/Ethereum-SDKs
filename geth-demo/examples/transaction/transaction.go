package transaction

import (
	"context"
	"fmt"
	"geth-demo/config"
	"geth-demo/examples/client"
	"log"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/joho/godotenv"
)

func GetBlockHeader() {
	// 加载 .env 文件
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	httpRPCUrl, _ := config.GetMainnetRPCEndpoint()
	client := client.CreateClient(httpRPCUrl)
	header, err := client.HeaderByNumber(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(header.Number.String()) // 5671744
}

func GetBlockByNumber(blockNumber *big.Int) *types.Block {
	httpRPCUrl, _ := config.GetMainnetRPCEndpoint()
	client := client.CreateClient(httpRPCUrl)
	block, err := client.BlockByNumber(context.Background(), blockNumber)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(block.Number().Uint64())     // 5671744
	fmt.Println(block.Time())                // 1527211625
	fmt.Println(block.Difficulty().Uint64()) // 3217000136609065
	fmt.Println(block.Hash().Hex())          // 0x9e8751ebb5069389b855bba72d94902cc385042661498a415979b7b6ee9ba4b9
	fmt.Println(len(block.Transactions()))   // 144
	return block
}

func GetBlockCountByHash(hash common.Hash) {
	httpRPCUrl, _ := config.GetMainnetRPCEndpoint()
	client := client.CreateClient(httpRPCUrl)
	count, err := client.TransactionCount(context.Background(), hash)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(count) // 144
}
