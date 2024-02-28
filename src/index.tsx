import React from "react";
import ReactDOM from "react-dom/client";
import {
  Bridge,
  bootstrap,
  themeDark,
  ThemeProvider,
  createWagmiProvider,
} from "@layerzerolabs/x-trader-joe-bridge";

import { wagmi } from "./config/wagmi";
import { mainnet } from "./config/mainnet";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "./styles/reset.css";
import "./styles/fonts.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { WagmiConfig } from "wagmi";

// boostrap the bridge
bootstrap(mainnet, {
  evm: wagmi.wagmiAdapter,
});

const EthereumAdapterProvider = createWagmiProvider(
  wagmi
) as React.FC<React.PropsWithChildren>;

const App = () => {
  return (
    <Layout>
      <EthereumAdapterProvider>
        <ThemeProvider theme={themeDark}>
          <Bridge />
        </ThemeProvider>
      </EthereumAdapterProvider>
    </Layout>
  );
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "center",
        background: "#181824",
      }}
    >
      {children}
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// don't use strict mode with rainbowkit
// see: https://github.com/rainbow-me/rainbowkit/issues/836
root.render(
  <>
    {/* use your own rainbow kit provider */}
    <WagmiConfig client={wagmi.wagmiClient as any}>
      <RainbowKitProvider chains={wagmi.wagmiChains}>
        {/* you use connect button from rainbowkit */}
        <ConnectButton />

        {/* bridge will use existing integration */}
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </>
);
