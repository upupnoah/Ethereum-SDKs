package account

import (
	"fmt"

	"github.com/ethereum/go-ethereum/common"
)

func ToAddress(addr string) common.Address {
	address := common.HexToAddress(addr)
	fmt.Println(address.Hex())        // 0x71C7656EC7ab88b098defB751B7401B5f6d8976F
	fmt.Println(address.Bytes())      // [113 199 101 110 199 171 136 176 152 222 251 117 27 116 1 181 246 216 151 111]
	return address
}
