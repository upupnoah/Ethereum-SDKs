package main

import (
	"geth-demo/examples/transaction"
	"math/big"
)

func main() {
	// account.CreateWallet()
	transaction.GetBlockHeader()
	block := transaction.GetBlockByNumber(big.NewInt(5671744))
	transaction.GetBlockCountByHash(block.Hash())
}
