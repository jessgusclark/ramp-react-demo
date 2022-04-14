import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

export const buyDoc = (address: string) => {
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
