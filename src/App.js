import React, { Component } from 'react';
import './App.css';
import audioconcat from 'audioconcat';

class App extends Component {

  componentDidMount() {

    console.log('componentDidMount called');

      const songs =
        ['everything_changed.mp3',
        'fear_is_a_liar.mp3',
        'my_liberty.mp3'];
      console.log('songs are',songs);

       audioconcat(songs)
       .concat('all.mp3')
       .on('start', function (command) {
         console.log('ffmpeg process started:', command)
       })
       .on('error', function (err, stdout, stderr) {
         console.error('Error:', err)
         console.error('ffmpeg stderr:', stderr)
       })
       .on('end', function (output) {
         console.error('Audio created in:', output)
       })
       console.log('audioconcat result is',audioconcat);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          hai
        </header>
      </div>
    );
  }
}

export default App;
