import Page from '../components/page';
import Head from 'next/head'
import CChainDashboard from '../components/C-ChainDashboard';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
import Navbar from '../components/navbar';
import MessageBar from '../components/messages/MessageBar';
import Header from '../components/header';


var web3;

let fm = new Fortmatic('pk_test_F4970AF6BBC7F0C1');
if (process.browser) {
  web3 = new Web3(fm.getProvider());
}

export default () => (
    <Page title="">
	<Head>
      <title>TripleCheck Dashboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="main">
      <Navbar />
      <h1>Triple<b>Check</b></h1>
      <h4>Digital Privacy, Origination and Verification</h4>
      <Header />
      <MessageBar />
      <CChainDashboard />
      <br/>
      </section>
      <br/>
      <style jsx>{`


.main {
  background-color: #6200EE;
}
  b {
    font-weight: normal;
  }

  h1 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 2em;
      font-weight: 200;
      margin-right: 30px;
      padding-left: 5px;
      color: #FFF;
      text-align: center;
    }

    h4 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 16px;
      font-weight: normal;
      margin-right: 30px;
      padding-left: 5px;
      color: #FFF;
      text-align: center;
    }
    .center {
      text-align: center;
      margin-bottom: 3px;
    }



/* The typing effect */
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: orange; }
}

      h4 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 16px;
      font-weight: normal;
      margin-right: 30px;
      padding-left: 5px;
      color: #FFF;
      text-align: center;
    }

    .policyButton {
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
        padding: 0px 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }

    p {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 18px;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    img {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      height: 80px;
      width: 80px;
      font-size: 12px;
      text-align: center;
    }

    ul {

        display: inline-block;
        color: #999;
        position: absolute;
        margin-left: -15px;
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

.after {
  box-sizing: inherit;
}

// CSS only media query for tablet
@media screen and (max-width: 960px) {
  .row {
    flex-direction: column;
    margin: -1.5rem 0;
    padding-bottom: 8px;
    padding-top: 8px;
    padding-left: 28px;
  }

  
  .column {
    width: 100%;
    text-align: center;
    max-width: 350px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 28px;
  }

  .center {
    text-align: center;
  }

  .column2 {
    list-style: none;
    display: none;
  }
}




`}</style>
  </Page>



  )
