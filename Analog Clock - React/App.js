import { useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(13790);
  const interval = useRef(null);
  const timeMarks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function startClock() {
    interval.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function stopClock() {
    setSeconds(0);
    clearInterval(interval.current);
  }

  return (
    <>
      <div className="dial-wrap">
        <div className="dial">
          <div
            className="seconds hand"
            style={{ transform: `rotate(${seconds * 6 - 90}deg)` }}
          ></div>
          <div
            className="minute hand"
            style={{
              transform: `rotate(${Math.floor(seconds / 60) * 6 - 90}deg)`,
            }}
          ></div>
          <div
            className="hour hand"
            style={{
              transform: `rotate(${Math.floor(seconds / 3600) * 6 - 90}deg)`,
            }}
          ></div>
          {timeMarks.map((item) => (
            <div
              className="number"
              style={{ transform: `rotate(${item * 30}deg)` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button onClick={startClock}>Start clock</button>
      <button onClick={stopClock}>Stop clock</button>
    </>
  );
}

export default App;
