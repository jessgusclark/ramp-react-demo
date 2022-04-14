import { ethers, BigNumber } from 'ethers'

const erc20AbiPartial = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]

const provider = new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')
const rDocAddress = '0xc3de9f38581f83e281f260d0ddbaac0e102ff9f8'
const rDocContract = new ethers.Contract(rDocAddress, erc20AbiPartial, provider)
const rDocDecimals = 18

export const getRDocBalance = (address: string): Promise<string> => {
  console.log('getting balance yo!', address)
  console.log(rDocContract)

  return rDocContract.balanceOf(address.toLowerCase())
    .then((response: BigNumber) => {
      console.log(response)
      return balanceToString(response, 18)
    })
}

// borrowed from the SmartWallet
const balanceToString = (
  balance: BigNumber,
  numberOfDecimals: number
) => {
  const pot = BigNumber.from('10').pow(numberOfDecimals)
  const parts = {
    integerPart: BigNumber.from(balance).div(pot).toString(),
    decimalPart: BigNumber.from(balance)
      .mod(pot)
      .toString()
      .padStart(Number(numberOfDecimals.toString()), '0')
      .slice(0, 4)
  }

  return `${parts.integerPart}.${parts.decimalPart}`
}
