import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Counter() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function increaseCount() {
    //setCount(count + 1); or

    setCount((prevCount) => prevCount + 1);
  }

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="border-2 py-8 px-8 mt-5 ml-18 mb-4 flex flex-col gap-4 w-fit">
      <h2 className="font-bold">React Counter</h2>

      <span className="font-extrabold text-5xl">{count}</span>

      <div className="flex gap-1">
        <button className="flex gap-4 bg-amber-300 cursor-pointer px-8 "
           onClick={increaseCount}
        >
          <Plus />
        </button>

        <button className="flex gap-4 bg-green-500 cursor-pointer px-8"
            onClick={decreaseCount}
        >
          <Minus />
        </button>

        <button className="flex gap-4 bg-blue-300 cursor-pointer px-8"
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

/*
onClick={() => setCount(count + 1)} or
onClick={() => setCount(prevCount => prevCount + 1 + 1)} 

*/
