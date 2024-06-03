package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func GetMainnetRPCEndpoint() (string, string) {
	// 加载 .env 文件
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// 获取环境变量的值
	http, wss := os.Getenv("HTTP_MAINNET_RPC_URL"), os.Getenv("WSS_MAINNET_RPC_URL")
	return http, wss
}

func GetSepoliaRPCEndpoint() (string, string) {
	// 加载 .env 文件
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// 获取环境变量的值
	http, wss := os.Getenv("HTTP_SEPOLIA_RPC_URL"), os.Getenv("WSS_SEPOLIA_RPC_URL")
	return http, wss
}
