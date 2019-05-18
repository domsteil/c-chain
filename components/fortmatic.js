import { Connectors } from 'web3-react'
import FortmaticApi from 'fortmatic'

const Fortmatic = Connectors.FortmaticConnector({
  api: FortmaticApi,
  apiKey: 'pk_test_F4970AF6BBC7F0C1',
  logoutOnDeactivation: false
})

export default Fortmatic;