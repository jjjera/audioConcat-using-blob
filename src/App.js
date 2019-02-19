import React, { Component } from 'react';
import './App.css';
// import audioconcat from 'audioconcat';
import FileConversion from '../src/fileConversion/FileConversion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  // div = document.querySelector("div");

//  handleFilesSelect = (input) => {
//   console.log('handleFilesSelect func called');
//   console.log('input.files',input);
//   this.div.innerHTML = "loading audio tracks.. please wait";
//   var files = Array.from(input.files);
//   // var files = document.getElementById(input.files);
//   var duration = 60000;
//   var chunks = [];
//   var audio = new AudioContext();
//   var mixedAudio = audio.createMediaStreamDestination();
//   var player = new Audio();
//   var context;
//   var recorder;
//   var description = "";
//
//   player.controls = "controls";
//
//   function get(file) {
//     console.log('get func called');
//     description += file.name.replace(/\..*|\s+/g, "");
//     return new Promise(function(resolve, reject) {
//       var reader = new FileReader();
//       reader.readAsArrayBuffer(file);
//       reader.onload = function() {
//         resolve(reader.result)
//       }
//     })
//   }
//
//   function stopMix(duration, ...media) {
//     setTimeout(function(media) {
//       media.forEach(function(node) {
//         node.stop()
//       })
//     }, duration, media)
//   }
//
//   Promise.all(files.map(get)).then(function(data) {
//     console.log('Promise called');
//       var len = Math.max.apply(Math, data.map(function(buffer) {
//         return buffer.byteLength
//       }));
//       context = new OfflineAudioContext(2, len, 44100);
//       return Promise.all(data.map(function(buffer) {
//           return audio.decodeAudioData(buffer)
//             .then(function(bufferSource) {
//               var source = context.createBufferSource();
//               source.buffer = bufferSource;
//               source.connect(context.destination);
//               return source.start()
//             })
//         }))
//         .then(function() {
//           return context.startRendering()
//         })
//         .then(function(renderedBuffer) {
//           return new Promise(function(resolve) {
//             var mix = audio.createBufferSource();
//             mix.buffer = renderedBuffer;
//             mix.connect(audio.destination);
//             mix.connect(mixedAudio);
//             recorder = new MediaRecorder(mixedAudio.stream);
//             recorder.start(0);
//             mix.start(0);
//             this.div.innerHTML = "playing and recording tracks..";
//             // stop playback and recorder in 60 seconds
//             stopMix(duration, mix, recorder)
//
//             recorder.ondataavailable = function(event) {
//               chunks.push(event.data);
//             };
//
//             recorder.onstop = function(event) {
//               var blob = new Blob(chunks, {
//                 "type": "audio/ogg; codecs=opus"
//               });
//               console.log("recording complete");
//               resolve(blob)
//             };
//           })
//         })
//         .then(function(blob) {
//           console.log(blob);
//           this.div.innerHTML = "mixed audio tracks ready for download..";
//           var audioDownload = URL.createObjectURL(blob);
//           var a = document.createElement("a");
//           a.download = description + "." + blob.type.replace(/.+\/|;.+/g, "");
//           a.href = audioDownload;
//           a.innerHTML = a.download;
//           document.body.appendChild(a);
//           a.insertAdjacentHTML("afterend", "<br>");
//           player.src = audioDownload;
//           document.body.appendChild(player);
//         })
//     })
//     .catch(function(e) {
//       console.log(e)
//     });
// }

  render() {

    return (
      <div className="App-header" >
        <header className="App-header">
          <h3>Audio merging!!</h3>
        <br/>
        <br/>
        <FileConversion/>
        </header>
      </div>
    );
  }
}

export default App;
