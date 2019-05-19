import React, { Component } from "react";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ProgressBar">
        <a
          className="Progress"
          style={{ width: this.props.progress + "%" }}
        />
            <style jsx>{`

.ProgressBar {
    width: 100%;
    height: 8px;
    background-color: rgb(183, 155, 229);
    border-radius: 5px;
  }
  
  .Progress {
    background-color: rgba(103, 58, 183, 1);
    height: 100%;
    margin: 0;
    border-radius: 5px;
  }
`}
</style>
      </div>
    );
  }
}

export default Progress;