import * as React from 'react'
import { useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { metaMask } from '../connector/metaMask'
import { walletConnect } from '../connector/walletConnect'
import type { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../components/Layout'

const IndexPage: React.FC<PageProps> = () => {
  // const chainId = useChainId()
  // const isActivating = useIsActivating()
  const { accounts, chainId, ENSName, isActive } = useWeb3React()

  // console.log(chainId, isActivating, useProvider(), provider)

  return (
    <Layout>
      <div className="h-full pt-28 px-4 bg-gray-50">
        <div className="flex flex-col items-center w-full space-y-3 ">
          <div className="text-3xl font-extrabold text-gray-900">
            Login to ETH-Chat
          </div>
          <p className="">Connect with your web3 based wallet</p>

          <a
            className="container max-w-md p-4 flex flex-start border rounded-xl shadow transition-all bg-white hover:bg-gray-100"
            href="#"
            onClick={() => {
              isActive ? metaMask.deactivate() : metaMask.activate()
            }}
          >
            <StaticImage
              className="flex-none"
              src="../images/metamask.png"
              alt="meta mask"
              width={60}
              height={60}
            />
            <div className="flex flex-col pl-4 ">
              <h2 className="text-sm font-bold">MetaMask</h2>
              <p className="text-sm font-extralight ">
                Connect using a browser plugin or mobile app. Best supported on
                Chrome or Firefox.
              </p>
            </div>
          </a>

          <a
            className="container max-w-md p-4 flex flex-start border rounded-xl shadow transition-all bg-white hover:bg-gray-100"
            href="#"
            onClick={() => {
              isActive ? walletConnect.deactivate() : walletConnect.activate()
            }}
          >
            <StaticImage
              className="flex-none"
              src="../images/walletconnect-logo.png"
              alt="wallet connect"
              width={60}
              height={60}
              transformOptions={{ fit: 'fill' }}
            />
            <div className="flex flex-col pl-4 ">
              <h2 className="text-sm font-bold">Wallet Connect</h2>
              <p className="text-sm font-extralight ">
                Connect by scanning a QR code for mobile wallets that support
                Wallet Connect.
              </p>
            </div>
          </a>
        </div>

        <div>
          accounts: {accounts} ens:{ENSName} chainID:{chainId}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
