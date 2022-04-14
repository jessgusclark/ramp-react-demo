import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'
import RLogin from '@rsksmart/rlogin'
import React, { useState } from 'react'
import './App.scss'
import { getProviderAddress } from './lib/provider'
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

  const buyDoc = () => {
    const ramp = new RampInstantSDK({
      // for testnet:
      // url: 'https://ri-widget-staging.firebaseapp.com/',
      url: 'https://ri-widget-staging.web.app/',

      // for IOV:
      swapAsset: 'RSK_RDOC',
      // userAddress must be lowercase or checksummed correctly:
      userAddress: address,

      // for the dapp:
      hostAppName: 'Ramp POC',
      hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png'
    })

    ramp.on('*', event => console.log(event)).show()
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
                <td>{address}</td>
              </tr>
              <tr>
                <th>rDoc Balance</th>
                <td>{rDocBalance}</td>
                <td>
                  <button onClick={() => getRDocBalance(address).then(setRDocBalance)}>
                    refresh
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={buyDoc}>Buy RDOC!</button>
        </div>
      )}
    </div>
  )
}

export default App
