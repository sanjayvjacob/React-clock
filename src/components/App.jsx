import React, { useState} from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  setInterval(updateTime, 1000); /*you can get code to be called every second using the setInterval method */

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
   setTime (newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
