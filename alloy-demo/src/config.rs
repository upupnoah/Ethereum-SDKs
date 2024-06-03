// src/config.rs

use dotenv::dotenv;
use std::env;

pub struct Config {
    pub http_sepolia_rpc_url: String,
    pub wss_sepolia_rpc_url: String,
    pub http_mainnet_rpc_url: String,
    pub wss_mainnet_rpc_url: String,
}

impl Config {
    pub fn new() -> Self {
        dotenv().ok(); // 确保在尝试访问环境变量之前，.env 文件已被加载

        Config {
            http_sepolia_rpc_url: env::var("HTTP_SEPOLIA_RPC_URL")
                .expect("HTTP_SEPOLIA_RPC_URL not set"),
            wss_sepolia_rpc_url: env::var("WSS_SEPOLIA_RPC_URL")
                .expect("WSS_SEPOLIA_RPC_URL not set"),
            http_mainnet_rpc_url: env::var("HTTP_MAINNET_RPC_URL")
                .expect("HTTP_MAINNET_RPC_URL not set"),
            wss_mainnet_rpc_url: env::var("WSS_MAINNET_RPC_URL")
                .expect("WSS_MAINNET_RPC_URL not set"),
        }
    }
}

impl Default for Config {
    fn default() -> Self {
        Self::new()
    }
}
