import * as React from 'react'
import { useWeb3React } from '@web3-react/core'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { account, isActive, ENSName, connector } = useWeb3React()

  return (
    <div className="h-screen flex flex-col bg-white ">
      <div className="flex px-2 py-3 shadow-sm border-b-2">
        <button
          onClick={() => {
            console.log(connector)
            connector.deactivate()
          }}
          className="ml-auto px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none"
        >
          {isActive ? (ENSName ? ENSName : account) : 'Connect'}
        </button>
      </div>
      <div className="flex-1">{children}</div>
      {/* <div className="">footer</div> */}
    </div>
  )
}
