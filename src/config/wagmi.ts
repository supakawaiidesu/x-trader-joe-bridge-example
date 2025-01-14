import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { fantom, arbitrum, optimism, bsc, avalanche, mainnet } from "@wagmi/core/chains";

import { createWagmiAdapter } from "@layerzerolabs/x-trader-joe-bridge";

const BASE = {
  id: 8453,
  name: "Base Chain",
  network: "BASE",
  nativeCurrency: {
    name: "Ethereum", 
    symbol: "ETH", 
    decimals: 18 
  },
  rpcUrls: {
    default: {
      http: ["https://base.llamarpc.com"] 
    }
  },
  blockExplorers: {
    default: {
      name: "Base Explorer",
      url: "https://basescan.org/"
    }
  }
};
const METIS = {
  id: 1088,
  name: "Metis",
  network: "METIS",
  nativeCurrency: {
    name: "Metis", 
    symbol: "METIS", 
    decimals: 18 
  },
  rpcUrls: {
    default: {
      http: ["https://metis-pokt.nodies.app"] 
    }
  },
  blockExplorers: {
    default: {
      name: "Metis Explorer",
      url: "https://explorer.metis.io/"
    }
  }
};

const { chains: wagmiChains, provider } = configureChains(
  // provide wagmi chain configuration
  [fantom, optimism, arbitrum, bsc, avalanche, mainnet, BASE, METIS],
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
