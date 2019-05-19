import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

var web3;
var address;


const ethUtil = require('ethereumjs-util');
const msg = ethUtil.bufferToHex(new Buffer('ANY STRING', 'utf8'));

let verifyData;

export default () => 
<section>
    <div className="actions">
    <h1>Your Encrypted Files:</h1>
      </div>
    <style jsx>{`

      h1 {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        margin: 10px 0;
        font-size: 1.7em;
        font-weight: 200;
        margin-right: 30px;
        padding-left: 5px;
        color: #000;
        text-align: left;
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
        width: 120px;
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

      .actions {
        align: right;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 100%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 350px;
        }

        .actions {
          align: right;
        }

        
.archetype-form__container {
    background: 0 0;
    color: #0d112b;
    width: 100%;
    margin: 0 auto;
    text-align: left;
}
      }
    `}</style>
    </section>