import React, { Component } from 'react';
import './App.css';
// import audioconcat from 'audioconcat';
import FileConversion from '../src/fileConversion/FileConversion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  componentDidMount() {
    // function getData(/home/jerold/Music/Songs/Eng/fear_is_a_liar.mp3, callback) {
    // var reader = new FileReader();
    // reader.onload = function(event) {
    //     var data = event.target.result.split(',')
    //      , decodedImageData = btoa(data[1]);                    // the actual conversion of data from binary to base64 format
    //     callback(decodedImageData);
    // };
    // reader.readAsDataURL(fear_is_a_liar.mp3);
    // }
    // console.log('getData is',getData);
  }

  goTBblobUrl = (data) => {
    console.log('blobUrl clicked');
    let blob=new Blob(["everything_changed.mp3","fear_is_a_liar.mp3"], {type : 'audio/mp3'});
    console.log('blob is',blob);
    var blobUrl = URL.createObjectURL(blob);
    console.log('blobUrl is',blobUrl);
    // var blob = new Blob([final_transformation], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, "hello world.txt");
    // let binary= convertDataURIToBinary(data);
    // let blob=new Blob([binary], {type : 'audio/ogg'});
    // let blobUrl = URL.createObjectURL(blob);
  }

  render() {

    return (
      <div className="App-header" >
        <header className="App-header">
          <h3>Audio merging!!</h3>
        <br/>
        <FileConversion />
        <br/>
        </header>
      </div>
    );
  }
}

export default App;
