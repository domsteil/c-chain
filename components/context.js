import React from 'react'
import { useWeb3Context } from 'web3-react'

function Context() {
  const context = useWeb3Context()

  return <p>{context.account}</p>
}