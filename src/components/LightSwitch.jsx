
import { FlashlightOff, Power } from "lucide-react";
import { useState } from "react";

function LightSwitch() {
  const [isLightSwitchOn, setIsLightSwitchOn] = useState(false);

  return (
    <div className={`font-bold flex flex-col w-full max-w-md px-10 py-8 gap-5 mb-10 ml-18 rounded-3xl transition-colors duration-500 ${ isLightSwitchOn ? "bg-yellow-400 text-black"
      : "bg-black text-white"
    }`}>

      <div className="flex justify-center items-center m-3">
        <button
          onClick={() => setIsLightSwitchOn((prev) => !prev)}
          className={`px-6 py-3 flex items-center gap-2 border border-black/40 rounded-lg cursor-pointer ${
            isLightSwitchOn
              ? "bg-gray-200 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {isLightSwitchOn ? (
            <>
              <Power />
              ON
            </>
          ) : (
            <>
              <FlashlightOff />
              OFF
            </>
          )}
        </button>
      </div>

    </div>
  );
}

export default LightSwitch;
