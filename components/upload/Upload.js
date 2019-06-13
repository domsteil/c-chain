import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import Progress from "../progress/Progress";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      policy: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("policy", policy1);
      formData.append("file", file, file.name);

      req.open("POST", "https://app.triplecheck.network/upload");
      req.send(formData);
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button className="policyButton"
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </button>
      );
    } else {
      return (
        <button className="policyButton"
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      );
    }
  }

  render() {
    return (
      <div className="Upload">
        <span className="Title"></span>
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
        </div>

        <br/>

        <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
          <form>
        
        <button className="policyButton"
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
        </button>
        <select id="policy" className="policyDropdown" onSelect={() => this.setState({ policy: [], successfullUploaded: false })} >
          <option value="policy1">Policy 1</option>
          <option value="policy2">Policy 2</option>
        </select>
        </form>
        <style jsx>{`

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
      </div>
    );
  }
}

export default Upload;