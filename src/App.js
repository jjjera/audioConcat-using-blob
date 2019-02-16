import React, { Component } from 'react';
import './App.css';
// import audioconcat from 'audioconcat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

   stopSound = () => {
     console.log('stopSound called');
    if (this.source) {
        // this.source.stop(0);
    }
}
 playSound = () => {
   console.log('playSound called');
    // source is global so we can call .stop() later.
    // this.source = context.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.loop = false;
    this.source.connect(this.context.destination);
    // this.source.start(0); // Play immediately.
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <input type="file" accept="audio/*" />
        <br/>
        <button onClick={this.playSound()} disabled>Start</button>
        <button onClick={this.stopSound()} disabled>Stop</button>
        <div>
        <p>This will be the output of a base64 string representation of your sound file.</p>
        <textarea id="encodedResult" cols="100" rows="10">
        </textarea>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
