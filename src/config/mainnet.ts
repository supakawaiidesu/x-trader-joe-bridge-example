import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';


//const BASE_CHAIN_ID = 184 as any; // Example, adjust based on actual value and usage
const METIS_CHAIN_ID = 151 as any; // Example, adjust based on actual value and usage

const tokens = [
  new Token(ChainId.OPTIMISM, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(ChainId.ARBITRUM, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(ChainId.FANTOM, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(ChainId.BSC, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(ChainId.AVALANCHE, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(ChainId.ETHEREUM, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  //new Token(BASE_CHAIN_ID, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(METIS_CHAIN_ID, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
  new Token(ChainId.POLYGON, '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1', 18, 'MOLTEN'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: '0x66E535e8D2ebf13F49F3D49e5c50395a97C137b1',
  },
];

export const mainnet = {tokens, proxy};
