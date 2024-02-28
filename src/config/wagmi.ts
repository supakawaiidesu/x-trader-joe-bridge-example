import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { fantom, arbitrum, optimism, bsc, avalanche, mainnet } from "@wagmi/core/chains";

import { createWagmiAdapter } from "@layerzerolabs/x-trader-joe-bridge";

const base = {
  id: 8453,
  name: "Base Chain",
  network: "base",
  nativeCurrency: {
    name: "Ethereum", 
    symbol: "ETH", 
    decimals: 18 
  },
  rpcUrls: {
    default: {
      http: ["https://base.llamarpc.com	"] 
    }
  },
  blockExplorers: {
    default: {
      name: "Base Explorer",
      url: "https://basescan.org/"
    }
  }
};

/*
const mainnet = {
  id: 1,
  name: "Ethereum",
  network: "mainnet",
  nativeCurrency: {
    name: "Ethereum", 
    symbol: "ETH", 
    decimals: 18 
  },
  rpcUrls: {
    default: {
      http: ["https://eth.llamarpc.com"] 
    }
  },
  blockExplorers: {
    default: {
      name: "Base Explorer",
      url: "https://etherscan.org/"
    }
  }
};
*/


const { chains: wagmiChains, provider } = configureChains(
  // provide wagmi chain configuration
  [fantom, optimism, arbitrum, bsc, avalanche, mainnet, base],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains: wagmiChains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const wagmiAdapter = createWagmiAdapter(wagmiClient as any);

export const wagmi = {
  wagmiClient,
  wagmiChains,
  wagmiAdapter,
};
