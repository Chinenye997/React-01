import { useState } from "react";

function Counter() {

  //let count = 0;
  const [count, setCount] = useState(0);

  function increaseCount() {

     //setCount(count + 1); or
     
     setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="border-2 py-8 px-4 flex flex-col gap-4 w-fit">
      <h2 className="font-bold">Counter Component</h2>

      <span className="font-extrabold text-5xl">{count}</span>

      <button onClick={increaseCount} className="bg-green-400 font-semibold self-start">
        Increase Count
      </button>
    </div>
  );
}

export default Counter;

/*
onClick={() => setCount(count + 1)} or
onClick={() => setCount(prevCount => prevCount + 1 + 1)} 

*/