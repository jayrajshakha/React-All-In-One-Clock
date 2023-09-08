import { useEffect, useState, useRef } from "react";

function StopWatch() {
  const [start, setStart] = useState(false);

  const [time, setTime] = useState(0);

  const [minute, setMinute] = useState(0);

  const timer = useRef();

  useEffect(() => {
    if (start) {
      timer.current = setInterval(() => {
        setTime((preve) => preve + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [start]);

  if (time === 60) {
    setMinute((preve) => preve + 1);
    setTime(0);
  }

  return (
    <div className="w-[500px] h-[200px] mx-auto bg-[pink] pt-2 rounded-md ">
      <h1 className="text-center text-black font-bold m-2 text-xl ">
        Stop Watch
      </h1>
      <p className="text-center text-2xl p-3 font-semibold">
        {" "}
        {minute > 9 ? minute : "0" + minute} : {time > 9 ? time : "0" + time}
      </p>
      <div className="flex justify-center items-center  ">
        <button
          onClick={() => {
            setStart(true);
          }}
          type="button"
          className="bg-blue-400 m-2 border-none outline-none w-[75px] rounded p-1 hover:bg-blue-500 "
        >
          {!start && time !== 0 ? "resume" : "Start"}
        </button>

        <button
          onClick={() => {
            setStart(true);
            setTime(0);
          }}
          type="button"
          className="bg-blue-400 m-2 border-none outline-none w-[75px] rounded p-1 hover:bg-blue-500 "
        >
          ReStart
        </button>

        <button
          onClick={() => {
            if (start) {
              clearInterval(timer.current);
              setStart(!start);
            }
          }}
          type="button"
          className="bg-blue-400 m-2 border-none outline-none w-[75px] rounded p-1 hover:bg-blue-500 "
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
