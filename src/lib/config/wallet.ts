import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { supportedChains } from './chains';

// Configure chains and providers
export const { chains, publicClient, webSocketPublicClient } = configureChains(
  supportedChains,
  [publicProvider()]
);

// Configure wallet connection
export const { connectors } = getDefaultWallets({
  appName: 'Claude AI',
  projectId: '37b5e2fccd46c838885f41186745251e',
  chains,
});

// Create wagmi config
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});