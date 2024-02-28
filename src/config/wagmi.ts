import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { fantom, arbitrum, optimism, bsc, avalanche, mainnet } from "@wagmi/core/chains";

import { createWagmiAdapter } from "@layerzerolabs/x-trader-joe-bridge";

const { chains: wagmiChains, provider } = configureChains(
  // provide wagmi chain configuration
  [fantom, optimism, arbitrum, bsc, avalanche, mainnet],
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
