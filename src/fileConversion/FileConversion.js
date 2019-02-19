import React, { Component } from 'react';
import {ConcatenateBlobs, POST_to_Server} from 'concatenateblobs';

class FileConversion extends Component {
constructor(props) {
  super(props);
  this.state = {mergedAudio:''};
  this.store = [];
  console.log('cons store',this.store);
  // console.log('mergedAudio is',this.state.mergedAudio);
  // this.getBase64Format = this.getBase64Format.bind(this);
}
// componentDidMount() {
//   console.log('state value is',this.state.mergedAudio);
// }
  goToEvaluate = () => {
     console.log('goToEvaluate func called');
     document.getElementById('button').addEventListener('click', () => {
     var files = document.getElementById('file').files;
     if (files.length > 0) {
     this.getBase64Format(files[0]);
     // console.log('getBase64Format',getBase64Format);
    }
    });
  }

  getBase64Format = (file) => {
     console.log('getBase64Format func called');
     const reader = new FileReader();
     reader.readAsDataURL(file);
     // console.log('reader is',reader);
         reader.onload = () => {
          console.log('reader.onload func called');
         // console.log('result is',reader.result);
         const content = reader.result;
         this.store.push(content);
         console.log('store values are',this.store.push(content));
          ConcatenateBlobs(this.store, 'audio/mp3', function(resultingBlob) {
              console.log('resultingBlob is',resultingBlob);
            // or preview locally
          // localVideo.src = URL.createObjectURL(resultingBlob);
          this.setState({mergedAudio:resultingBlob});
        });
         // console.log('content is',content);
         // const endResult = this.state.mergedAudio + content;

         // console.log('endResult',endResult);
         // this.setState({mergedAudio:endResult});
         // console.log('setState is',this.state.mergedAudio);
         // for (var i = 0; i < endResult.length; i++) {
         //   // store.push(files);
         //   console.log('condition is',store.push(endResult));
         // }
         // console.log('store values');
        };
      reader.onerror =  (error) => {
       console.log('Error: ', error);
      };
    }

  render() {
    console.log('final res',this.state.mergedAudio);
    return (
      <div>
        <input id="file" type="file"/>
          <br/>
          <br/>
        <button id="button" onClick={this.goToEvaluate}>Evaluate</button>
          <br/>
          <br/>
          <audio id="audio" src={this.state.mergedAudio} controls autoPlay />
      </div>
    );
  }

}

export default FileConversion;
