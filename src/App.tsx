import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'
import RLogin from '@rsksmart/rlogin'
import React, { useState } from 'react'
import './App.scss'

const rLogin = new RLogin({
  rpcUrls: {
    31: 'https://public-node.testnet.rsk.co'
  },
  supportedChains: [31]
})

function App () {
  const [provider, setProvider] = useState(null)
  const [address, setAddress] = useState<string>('')

  const connectToWallet = () => {
    rLogin.connect()
      .then((rLoginResponse: any) => {
        console.log('response:', rLoginResponse)
        setProvider(rLoginResponse.provider)
        rLoginResponse.provider.request({ method: 'eth_accounts' })
          .then((addresses: string[]) => setAddress(addresses[0]))
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
      userAddress: address.toLowerCase(),

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
            <tr>
              <th>Address</th>
              <td>{address}</td>
            </tr>
            <tr>
              <th>rDoc Balance</th>
              <td>0</td>
            </tr>
          </table>
          <button onClick={buyDoc}>Buy RDOC!</button>
        </div>
      )}
    </div>
  )
}

export default App
