package client

import (
	"log"

	"github.com/ethereum/go-ethereum/ethclient"
)

func CreateClient(rpcEndpoint string) *ethclient.Client {
	client, err := ethclient.Dial(rpcEndpoint)
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Println("we have a connection")
	return client
}
