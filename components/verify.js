import React from 'react';
import axios from 'axios';

export default class Verify extends React.Component {
  state = {
    hash: '',
    verifiedData: []
  }

  handleChange = event => {
    this.setState({ hash: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();


   const hash = this.state.hash;

    let axiosConfig = {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
      }
    };

    axios.post(`https://app.triplecheck.network/verify`, querystring.stringify({ hash: hash}),  axiosConfig)
    .then(res => {

      const verifiedData = res.data;
      this.setState({ verifiedData });
      console.log(res.data);
    })
}

render() {
return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <label className="tripleCheck">
        <input className="message-box" type="text" name="hash" onChange={this.handleChange} />
      </label>
      <button className="policyButton" type="submit">Verify</button><img className="center" src="../static/verification.png" height="28" width="28" align="middle" alt=""/>
    </form>
    <p>{this.state.verifiedData}</p>
    <br/>
        <style jsx>{`

      .column {
        text-align: center;
        border-width: 1px;
        list-style: none;
        padding-bottom: 8px;
        padding-top: 8px;
        margin-right: 28px;
      }

      .center {
        margin-left: 3px;
        margin-bottom: 10px;
      }

      .to {
        width: 260px;
        padding-bottom: 8px;
        padding-top: 8px;
        border: 1px solid #d0d4d9; 
        border-radius: .375rem;
        -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
        box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
        line-height: 20px;
        min-height: auto; 
        padding-left: 0; 
        padding-right: 0;
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
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }

      .policyDropdown {
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 120px;
        height: 30px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }

      
      .ipfsInput {
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 300px;
        height: 30px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: #000;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
        
      }

      .message-box {
        padding-bottom: 28px;
        width: 800px ;
        overflow: auto;
        margin: 0; 
        min-height: 42px; 
        height: 38px; 
        max-height: 180px; 
        border: 2px solid rgba(134,134,134,.7);
        border-radius: .375rem;
        outline: 0;
        background: #fff;
        resize: none;
        box-shadow: none;
        color: #1d1c1d;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        padding: 9px 30px 10px 50px;"
      }

      .login {
        color: #FFF;
      }

      .account {
        font-size: 13px;
        line-height: 1.91667;
        font-weight: 400;
        color: #3d464d;
        border: 1px solid #bdc4c9;
        padding: 3.5px 7px;
        border-radius: 4px;
        margin-top: 28px;
        margin-left: 8px;
      }

      .row {
        flex-direction: column;
        margin: -1.5rem 0;
        text-align: center;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 10%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 100px;
        }

        .message-box {
          padding-bottom: 28px;
          width: 20%;
          border: 2px solid rgba(134,134,134,.7);
          border-radius: .375rem;
          outline: 0;
          background: #FFFFFF;
          box-shadow: none;
          color: #1d1c1d;
          display: none;
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
          margin-left: 8px;
          font-weight: 500;
          font-size: 12px;
          color: rgb(102, 102, 102);
          background-color: rgb(255, 255, 255);
          user-select: none;
          cursor: pointer;
          text-decoration: none;
          padding: 0px 10px;
          margin-bottom: 2px;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(234, 234, 234);
          border-image: initial;
          transition: all 0.2s ease 0s;
          display: none;
        }
  
        .policyDropdown {
          display: inline-block;
          vertical-align: middle;
          text-transform: uppercase;
          text-align: center;
          line-height: 0;
          white-space: nowrap;
          width: 100px;
          height: 30px;
          margin-left: 8px;
          font-weight: 500;
          font-size: 12px;
          color: rgb(102, 102, 102);
          background-color: rgb(255, 255, 255);
          user-select: none;
          cursor: pointer;
          text-decoration: none;
          padding: 0px 10px;
          margin-bottom: 2px;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(234, 234, 234);
          border-image: initial;
          transition: all 0.2s ease 0s;
          overflow: hidden;
          outline: none;
          display: none;
        }

        
      }
    `}</style>
    </div>
)
    }
}
