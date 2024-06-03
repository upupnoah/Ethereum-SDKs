//! Example of creating an HTTP provider using the `on_http` method on the `ProviderBuilder`.

use alloy::providers::{Provider, ProviderBuilder};
use alloy_demo::config::Config;
use eyre::Result;

#[tokio::main]
async fn main() -> Result<()> {
    // RPC URL
    let cfg = Config::default();
    let rpc_url = cfg.http_mainnet_rpc_url.as_str().parse()?;

    // Create a provider with the HTTP transport using the `reqwest` crate.
    let provider = ProviderBuilder::new().on_http(rpc_url);

    // Get latest block number.
    let latest_block = provider.get_block_number().await?;

    // Print the block number.
    println!("Latest block number: {latest_block}");
    Ok(())
}
