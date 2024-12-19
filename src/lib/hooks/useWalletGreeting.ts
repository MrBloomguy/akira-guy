import { useAccount } from 'wagmi';
import { truncateAddress } from '../utils/address';

export const useWalletGreeting = () => {
  const { address } = useAccount();
  
  const greeting = address ? truncateAddress(address) : 'Connect your wallet';
  
  return {
    greeting,
    isConnected: !!address
  };
};