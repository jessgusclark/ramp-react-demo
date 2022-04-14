import RLogin from '@rsksmart/rlogin'
import React, { useState } from 'react'
import './App.scss'
import { getProviderAddress } from './lib/provider'
import { buyDoc } from './lib/ramp'
import { getRDocBalance } from './lib/rdoc'

const rLogin = new RLogin({
  rpcUrls: {
    31: 'https://public-node.testnet.rsk.co'
  },
  supportedChains: [31]
})

function App () {
  const [provider, setProvider] = useState(null)
  const [address, setAddress] = useState<string>('')
  const [rDocBalance, setRDocBalance] = useState<string>('LOADING')

  const connectToWallet = () => {
    rLogin.connect()
      .then(({ provider }) => {
        setProvider(provider)
        getProviderAddress(provider).then((addr: string) => {
          setAddress(addr)
          getRDocBalance(addr).then(setRDocBalance)
        })
      })
      .catch(console.log)
  }

  const refreshBalance = () => {
    setRDocBalance('LOADING')
    getRDocBalance(address).then(setRDocBalance)
  }

  return (
    <div className="App">
      <h1>Ramp Demo!</h1>

      {!provider && <button onClick={connectToWallet}>Connect!</button>}

      {provider && (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Address</th>
                <td>
                  <a href={`https://explorer.testnet.rsk.co/address/${address}`} target="_blank" rel="noreferrer">
                    {address}
                  </a>
                </td>
              </tr>
              <tr>
                <th>rDoc Balance</th>
                <td>{rDocBalance}</td>
                <td>
                  <button onClick={refreshBalance}>
                    refresh
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => buyDoc(address)}>Buy RDOC!</button>
        </div>
      )}
    </div>
  )
}

export default App
