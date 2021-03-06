import React from 'react'
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file: null,
      policy:'',
      message: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handlePolicyChange = this.handlePolicyChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      this.setState({ message: 'Success.'})
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }


  handlePolicyChange(e) {
    this.setState({ policy: e.target.value });
  }


  fileUpload(file){

    const policy = this.state.policy;

    const url = "https://app.triplecheck.network/upload";
    const formData = new FormData();
    formData.append('policy', policy)
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
        }
    }
    return  post(url, formData, config)
  }

  render() {
    return (
    <div className="fileUploadSection">
      <form className="center" onSubmit={this.onFormSubmit}>
      <br/>
        <input type="file" onChange={this.onChange} />
        <select className="policyDropdown" value={this.state.policy} onChange={this.handlePolicyChange}>
          <option value="policy1">Policy 1</option>
          <option value="policy2">Policy 2</option>
        </select>
        <button type="submit" className="policyButton">Upload</button><h4 className="successMessage">{ this.state.message }</h4>
        <style jsx>{`

.fileUploadSection {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    text-align: center;
    margin-left: 10px;
    overflow: hidden;
    width: 300px;
    align: center;
  }

  .successMessage {
    font-color: #50E3C2;
    color: #50E3C2;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    margin: 10px 0;
    font-size: 16px;
    font-weight: normal;
    margin-right: 30px;
    padding-left: 5px;
    text-align: center;
  }

  .center {
    align: center;
    padding-left: 700px;
  }

  .policyButton {
    -webkit-appearance: none;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    text-align: center;
    text-color: #000;
    line-height: 0;
    white-space: nowrap;
    width: 100px;
    height: 30px;
    margin-left: 3px;
    padding-l
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
    margin-bottom: 8px;
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
    margin-bottom: 8px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(234, 234, 234);
    border-image: initial;
    transition: all 0.2s ease 0s;
    overflow: hidden;
    outline: none;
  }
  
  .Content {
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    box-sizing: border-box;
    width: 100%;
  }
  
  .Files {
    margin-left: 32px;
    color: #FFF;
    font-color: #FFF;
    align-items: flex-start;
    justify-items: flex-start;
    flex: 1;
    overflow-y: auto;
  }
  
  .Actions {
    display: flex;
    flex: 1;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 32px;
  }
  
  .Title {
    margin-bottom: 32px;
    color: #FFF;
  }
  
  .Filename {
    margin-bottom: 8px;
    padding-right: 100px;
    font-size: 12px;
    color: #FFF;
  }
  
  .Row {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    padding: 8px;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .CheckIcon {
    opacity: 0.5;
    margin-left: 32px;
  }
  
  .ProgressWrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  }
  
  button {
    font-family: "Roboto medium", sans-serif;
    font-size: 14px;
    display: inline-block;
    height: 36px;
    min-width: 88px;
    padding: 6px 16px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    border-radius: 2px;
    background: rgba(103, 58, 183, 1);
    color: #fff;
    outline: 0;
  }
  
  button:disabled {
    background: rgb(189, 189, 189);
    cursor: default;
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

  .Upload {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    text-align: left;
    overflow: hidden;
    width: 300px;
    align: center;
    margin-left: 850px;
  }

  .policyButton {
    -webkit-appearance: none;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    text-align: center;
    text-color: #000;
    line-height: 0;
    white-space: nowrap;
    width: 100px;
    height: 30px;
    margin-left: 3px;
    padding-l
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
    margin-bottom: 8px;
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
    margin-bottom: 8px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(234, 234, 234);
    border-image: initial;
    transition: all 0.2s ease 0s;
    overflow: hidden;
    outline: none;
  }
  

`}</style>
      </form>
      </div>
   )
  }
}



export default SimpleReactFileUpload