import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
import { MediaQueryConsumer } from './media-query';
import Container from './container';

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


export default withRouter(({ isMobile, router }) => {
  const { route } = router;

  return (
    <MediaQueryConsumer>
      {media => {
        if (media.isMobile) {
          return (
            <Container center>
              <h1 className="visually-hidden" aria-hidden="true">
                C-Chain Network
              </h1>
            </Container>
          );
        }

        return (
          <Container center>
            <h1 className="visually-hidden" aria-hidden="true">
              C-Chain Network
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
                  <a><button onClick={handleLogin} className="signIn" invert >LogIn</button></a>
                </div>

                <p><b className="connected"></b>{address}</p>
                <p><strong></strong></p>
            </nav>
          </Container>
        );
      }}
    </MediaQueryConsumer>
  );
});