import './src/styles/global.css'
import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { WalletProvider } from './src/components/WalletProvider'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <WalletProvider>{element}</WalletProvider>
}
