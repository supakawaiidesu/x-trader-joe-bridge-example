import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { fantom, arbitrum, optimism, bsc, avalanche, mainnet, base, metis } from "@wagmi/chains";

// Assuming createWagmiAdapter remains compatible
import { createWagmiAdapter } from "@layerzerolabs/x-trader-joe-bridge";

const { chains, publicClient } = configureChains(
  [fantom, optimism, arbitrum, bsc, avalanche, mainnet, base, metis],
  [publicProvider()]
);

const projectId = 'YOUR_PROJECT_ID';

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId,
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient, // Note the change from publicClient to provider
});

const wagmiAdapter = createWagmiAdapter(wagmiClient as any);

export const wagmi = {
  wagmiClient,
  chains, // Renamed from wagmiChains for clarity
  wagmiAdapter,
};
