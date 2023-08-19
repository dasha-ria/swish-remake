//Code referenced from https://codepen.io/aburkalo/pen/qBoyaGE and translated into Tailwind CSS
"use client";
import { useEffect, useState } from "react";

export function Phone() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-w-screen min-h-screen bg-blue-700">
      <section className="pl-[75px] pt-[75px]">
        <div className="outside-border scale-110 relative w-[212px] h-[438px] border-[0.6px] border-white -ml-[9px] mt-[37px] rounded-[35px]">
          <div className="absolute h-full w-full top-0 left-0 rounded-[35px] overflow-hidden"></div>
          <div className="silencer absolute bg-white rounded-md w-[2px] h-[13px] -left-[1px] top-[81.5px] opacity-[0.8]"></div>
          <div className="volume-up absolute bg-white rounded-md w-[1px] h-[28px] -left-[1.5px] opacity-[0.8] top-[110px]"></div>
          <div className="volume-down absolute bg-white rounded-md w-[1px] h-[28px] -left-[1.5px] opacity-[0.8] top-[148px]"></div>
          <div className="button-on absolute bg-white rounded-md h-[45px] w-[2px] -right-[2px] opacity-[0.8] top-[121px]"></div>
          <div className="inside-border relative flex justify-center w-[100%] h-[100%] border-[6px] border-black rounded-[35px] ">
            {/* camera */}
            <div className="camera flex justify-center relative w-[76px] h-[20px] bg-black rounded-bl-[15px] rounded-br-[15px] top-0">
              <div className="camera-dot flex justify-center items-center absolute bg-phone-whitish rounded-[50%] w-[5px] height-[5px] left-[12px] top-[5px]">
                <div className="camera-dot-2 absolute bg-white rounded-[50%] w-[4px] h-[4px] opacity-[0.3] shadow-sm blur-[1px]"></div>
                <div className="camera-dot-3 absolute bg-black rounded-[50%] w-[1px] h-[1px] opacity-[0.7]"></div>
              </div>
              <div className="camera-speaker absolute bg-white w-[28px] h-[1px] rounded-[20px] -top-[3px] opacity-[0.2]"></div>
            </div>

            <div className="t-l-info absolute left-[20px] top-[8px] text-[10px] text-white font-medium">
              {new Date().toLocaleTimeString("sv-SE", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </div>

            {/* battery */}
            <div className="t-r-info flex gap-[5px] absolute right-[17px] top-[8px] text-[10px]">
              <div className="dots text-white">...</div>
              <div className="battery relative mt-[4px] h-[7px] w-[14px] border-[0.7px] border-phone-battery rounded-[2px]">
                <div className="bar w-[calc(80%_-_2px)] h-[calc(100%_-_2px)] bg-white m-[1px] rounded-[1px]"></div>
                <div className="dot absolute -right-[2px] top-[1.5px] w-[1px] h-[3px] bg-phone-battery rounded-[2px]"></div>
              </div>
            </div>
            <div className="bottom-line absolute h-[2px] w-[80px] bg-white bottom-[6px] rounded-[2px] opacity-[0.8]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
