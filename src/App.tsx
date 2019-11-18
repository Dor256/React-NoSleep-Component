import React from 'react';
import NoSleep from "./NoSleep";

const App = () => {
  return (
    <NoSleep dummyVid="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
      <h1>This Doesn't Sleep Mate</h1>
    </NoSleep>
  );
}

export default App;
