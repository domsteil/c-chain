import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
import { MediaQueryConsumer } from './media-query';
import Container from './container';
import Header from '../components/header';

var web3;
var address;
let fm = new Fortmatic('pk_test_F4970AF6BBC7F0C1');

if (process.browser) {
  web3 = new Web3(fm.getProvider());
}

      let setUserInfo = async () => {
        web3.eth.getAccounts((err, accounts) => {
          if (err) throw err;
          let address = accounts[0];
          console.log(address);
        });
      };

      let handleLogin = async () => {
        // Authenticate user
        let accounts = await fm.user.login();
        if (accounts.length > 0) {
          setUserInfo();
        }
      };
      

      let handleSendTransaction = () => {
        fm.transactions.send((err, txnHash) => {
          if (err) throw err;
          setUserInfo();
        });
      };


export default withRouter(({ router }) => {
  const { route } = router;

        return (
          <Container center>
            <h1 className="visually-hidden" aria-hidden="true">
              TripleCheck Network
            </h1>
            <nav className="f-reset">
              <style jsx>
                {`

.signIn {
  -webkit-appearance: none;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-transform: uppercase;
  text-align: center;
  line-height: 0;
  white-space: nowrap;
  width: 100px;
  height: 30px;
  font-weight: 500;
  font-size: 12px;
  color: rgb(102, 102, 102);
  background-color: rgb(255, 255, 255);
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  padding: 0px 25px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;
  transition: all 0.2s ease 0s;
  overflow: hidden;
  outline: none;
}

a {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 11px;
  margin-right: 30px;
  padding-right: 70px;
  margin-right: 8px;
  color: #999;
  text-transform: uppercase;
  text-decoration: none;
}

.headerItems {
  padding-bottom: 8px;
  margin-bottom: 8px;
  padding-right: 300px;
}

.connected {
    content: '';
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #50e3c2;
    margin-left: 10px;
}

b {
  font-weight: normal;
}

            nav {
                    position: relative;
                    flex: 1;
                    height: 64px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 800px;
                  }
                  
                  // CSS only media query for mobile + SSR
                  @media screen and (max-width: 640px) {
                    .logo {
                      display: none;
                    }
                  }
                `}
              </style>
                <div className="nav">
                  <a><button onClick={handleLogin} className="signIn" invert >Log In</button></a>
                </div>

                <p><b className="connected"></b>{address}</p>
                <p><strong></strong></p>
            </nav>
          </Container>
        );
});