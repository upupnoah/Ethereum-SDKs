package account

import (
	"crypto/ecdsa"
	"fmt"
	"log"

	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
	"golang.org/x/crypto/sha3"
)

// CreateWallet 创建一个新的以太坊钱包
func CreateWallet() {
	// 生成新的私钥
	privateKey, err := crypto.GenerateKey()
	if err != nil {
		log.Fatal(err)
	}

	// 将私钥转换为字节数组并打印
	privateKeyBytes := crypto.FromECDSA(privateKey)
	// fmt.Println("privateKeyBytes = ", privateKeyBytes) // 一坨二进制数据, 不能直接使用
	fmt.Println(hexutil.Encode(privateKeyBytes)[2:]) // 打印私钥（去掉 "0x" 前缀）

	// 获取公钥并断言类型
	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		log.Fatal("cannot assert type: publicKey is not of type *ecdsa.PublicKey")
	}

	// 将公钥转换为字节数组并打印
	publicKeyBytes := crypto.FromECDSAPub(publicKeyECDSA)
	fmt.Println(hexutil.Encode(publicKeyBytes)[4:]) // 打印公钥（去掉 "0x04" 前缀）

	// 计算以太坊地址并打印
	address := crypto.PubkeyToAddress(*publicKeyECDSA).Hex()
	fmt.Println(address) // 打印以太坊地址

	// 手动计算以太坊地址（与上面等效）
	hash := sha3.NewLegacyKeccak256()
	_, err = hash.Write(publicKeyBytes[1:]) // 将公钥（去掉第一个字节）写入哈希函数
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(hexutil.Encode(hash.Sum(nil)[12:])) // 打印手动计算的以太坊地址（取哈希值的后20字节）
}
