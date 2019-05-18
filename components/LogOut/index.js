// Initialize provider
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

let fm = new Fortmatic('pk_test_F4970AF6BBC7F0C1');
    web3 = new Web3(fm.getProvider());

fm.user.logout();
