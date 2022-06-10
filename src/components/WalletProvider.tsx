import React from 'react'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import {
  hooks as walletConnectHooks,
  walletConnect,
} from '../connector/walletConnect'
import { hooks as metaMaskHooks, metaMask } from '../connector/metaMask'

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [walletConnect, walletConnectHooks],
  [metaMask, metaMaskHooks],
]

type WalletProviderProps = {
  children?: React.ReactNode
}
export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  )
}
