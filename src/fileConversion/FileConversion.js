import React, { Component } from 'react';

class FileConversion extends Component {
constructor(props) {
  super(props);
  this.state = {encodedValue:''};
  console.log('encodedValue is',this.state.encodedValue);
}

  goToEvaluate = () => {
     console.log('func called');
     document.getElementById('button').addEventListener('click', () => {
     var files = document.getElementById('file').files;
     if (files.length > 0) {
     getBase64(files[0]);
     // console.log('getBase64',getBase64);
    }
    });
     function getBase64(file) {
     console.log('getBase64 called');
     var reader = new FileReader();
     reader.readAsDataURL(file);
     // console.log('reader is',reader);
     reader.onload = (state) => {
     // console.log('result is',reader.result);
     const endResult = reader.result;
     console.log('endResult is',endResult);
     let exValue = this.state.encodedValue + endResult;
     console.log('exValue',exValue);
     this.setState({encodedValue:exValue});
   };
    reader.onerror = function (error) {
     console.log('Error: ', error);
   };
 }
  }

  render() {
    console.log('final res',this.state.encodedValue);
    return (
      <div>
        <input id="file" type="file"/>
          <br/>
          <br/>
        <button id="button" onClick={this.goToEvaluate}>Evaluate</button>
          <br/>
          <br/>
          <audio id="audio" src={this.state.encodedValue} controls autoPlay/>
      </div>
    );
  }

}

export default FileConversion;
