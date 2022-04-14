import { toChecksumAddress } from '@rsksmart/rsk-utils'

export const getProviderAddress = (provider: any): Promise<string> =>
  provider.request({ method: 'eth_accounts' })
    .then((addresses: string[]) => toChecksumAddress(addresses[0], 31))
