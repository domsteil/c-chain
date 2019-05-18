import React, { useEffect } from 'react';
// import web3 providers

import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const initializeWeb3 = () => {
    let fm = new Fortmatic('pk_test_F4970AF6BBC7F0C1');
    web3 = new Web3(fm.getProvider());
    // Get current user account address.
    // Will authenticate the user if needed.
    web3.eth.getAccounts().then(accounts => {
      // You can use the wallet address as a key
      // to store and retrieve user data for your DApp.
      console.log(accounts);
    });
  };
  const LogIn = () => {
    // React hook fires once, when the component mounts
    useEffect(initializeWeb3, []);
    return <h1>Login</h1>;
  };
  export default LogIn;