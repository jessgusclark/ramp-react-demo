import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'
import React from 'react'
import './App.scss'

function App () {
  const ramp = new RampInstantSDK({
    // for testnet:
    url: 'https://ri-widget-staging.firebaseapp.com/',

    // for IOV!
    // swapAsset: 'RSK_RDOC',
    userAddress: '0x3dD03d7d6c3137f1Eb7582bA5957B8a2E26f304A'.toLowerCase(), // <-- must be lowercase or checksummed!

    // for the dapp:
    hostAppName: 'Ramp POC',
    hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png'
  })

  const buyDoc = () => {
    ramp.show()
  }

  return (
    <div className="App">
      <h1>Ramp Demo!</h1>

      <button onClick={buyDoc}>Buy!</button>
    </div>
  )
}

export default App
