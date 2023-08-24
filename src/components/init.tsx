"use client";
import Image from "next/image";
import { useRef } from "react";

export function Init({
  amount,
  setAmount,
  setCurrentPage,
  paymentMode,
  setPaymentMode,
}: any) {
  const inputRef = useRef<HTMLDivElement>(null);

  function handleNumberClick(value: any) {
    if (value === "," && amount.includes(",")) {
      return;
    }
    const nextAmount = amount + value.toString();
    if (inputRef.current !== null) {
      inputRef.current.textContent = nextAmount;
    }
    setAmount(nextAmount);
  }

  function handleDeleteNumber() {
    const deleteAmount = amount.slice(0, -1);
    if (inputRef.current !== null) {
      inputRef.current.textContent = deleteAmount;
    }
    setAmount(deleteAmount);
  }

  return (
    <div className="w-[250px] h-[500px] bg-swish-bg">
      <Image
        className="w-16 h-auto pt-8 mx-auto"
        src="/swish-logo.png"
        alt="Swish logo"
        width="1734"
        height="528"
      ></Image>

      <div className="flex justify-center pt-10 items-center gap-2">
        <div
          ref={inputRef}
          contentEditable
          suppressContentEditableWarning={true}
          className="bg-swish-bg outline-none border-red-500 min-w-[12px] fit-content text-white font-medium text-2xl z-50"
          onInput={(e) => setAmount(e.currentTarget.textContent)}
        />
        <h1 className="text-white font-medium text-2xl">kr</h1>
      </div>

      <div className="flex justify-center gap-2 pt-6">
        <button
          onClick={() => setPaymentMode("Send")}
          className={`z-50 flex justify-center items-center gap-[3px] py-1 w-14 rounded-full ${
            paymentMode === "Send" ? "bg-swish-blue" : "bg-app-init-buttons"
          }`}
        >
          <svg
            className="h-[0.7rem] w-auto fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z" />
          </svg>
          <p className="text-white text-[0.6rem] font-bold">Send</p>
        </button>
        <button
          onClick={() => setPaymentMode("Request")}
          className={`z-50 flex justify-center items-center gap-[3px] py-1 w-16 rounded-full ${
            paymentMode === "Request" ? "bg-swish-blue" : "bg-app-init-buttons"
          }`}
        >
          <svg
            className="h-[0.7rem] w-auto fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M451-193h55v-52q61-7 95-37.5t34-81.5q0-51-29-83t-98-61q-58-24-84-43t-26-51q0-31 22.5-49t61.5-18q30 0 52 14t37 42l48-23q-17-35-45-55t-66-24v-51h-55v51q-51 7-80.5 37.5T343-602q0 49 30 78t90 54q67 28 92 50.5t25 55.5q0 32-26.5 51.5T487-293q-39 0-69.5-22T375-375l-51 17q21 46 51.5 72.5T451-247v54Zm29 113q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
          </svg>
          <p className="text-white text-[0.6rem]">Request</p>
        </button>
        <button className="flex justify-center items-center gap-[3px] py-1 w-14 rounded-full bg-app-init-buttons">
          <svg
            className="h-[0.7rem] w-auto fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M80-707v-173h173v60H140v113H80Zm0 627v-173h60v113h113v60H80Zm627 0v-60h113v-113h60v173H707Zm113-627v-113H707v-60h173v173h-60ZM708-251h63v63h-63v-63Zm0-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm126-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm252-332v252H519v-252h252ZM440-440v252H188v-252h252Zm0-332v252H188v-252h252Zm-50 534v-152H238v152h152Zm0-332v-152H238v152h152Zm331 0v-152H569v152h152Z" />
          </svg>
          <p className="text-white text-[0.6rem]">Scan</p>
        </button>
      </div>
      <div className="grid grid-cols-3 mt-4 mx-auto w-[12.5rem] h-44 bg-app-md-gray rounded-xl tabular-nums">
        <button
          onClick={() => handleNumberClick(1)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          1
        </button>
        <button
          onClick={() => handleNumberClick(2)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          2
        </button>
        <button
          onClick={() => handleNumberClick(3)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          3
        </button>

        <button
          onClick={() => handleNumberClick(4)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          4
        </button>
        <button
          onClick={() => handleNumberClick(5)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          5
        </button>
        <button
          onClick={() => handleNumberClick(6)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          6
        </button>

        <button
          onClick={() => handleNumberClick(7)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          7
        </button>
        <button
          onClick={() => handleNumberClick(8)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          8
        </button>
        <button
          onClick={() => handleNumberClick(9)}
          className="z-50 text-white font-medium text-xl rounded-xl active:bg-white/5"
        >
          9
        </button>

        <button
          onClick={() => handleNumberClick(",")}
          className="z-50 text-white font-medium text-xl text-center rounded-xl active:bg-white/5"
        >
          ,
        </button>
        <button
          onClick={() => handleNumberClick(0)}
          className="z-50 text-white font-medium text-xl text-center rounded-xl active:bg-white/5"
        >
          0
        </button>
        <button
          onClick={handleDeleteNumber}
          className="flex justify-center items-center z-50 rounded-xl active:bg-white/5"
        >
          <svg
            className="h-6 w-auto fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M360-200q-22 0-40-11.5T289-241L120-480l169-239q13-18 31-29.5t40-11.5h420q24.75 0 42.375 17.625T840-700v440q0 24.75-17.625 42.375T780-200H360Zm420-60v-440 440Zm-431 0h431v-440H349L195-480l154 220Zm99-66 112-112 112 112 43-43-113-111 111-111-43-43-110 112-112-112-43 43 113 111-113 111 43 43Z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage("ChoosePerson")}
          className="bg-swish-blue active:bg-button-active py-2 rounded-lg w-[12.5rem] text-white font-bold z-50"
        >
          Next
        </button>
      </div>
      <div className="absolute flex gap-10 justify-center bottom-0 h-[4.5rem] border-t border-app-light-gray/40 rounded-xl w-full bg-app-dark-gray">
        <div className="flex flex-col items-center mt-2">
          <svg
            className="h-5 w-auto fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
          </svg>
          <p className="text-white text-sm font-bold">Home</p>
        </div>
        <div className="flex flex-col items-center mt-2">
          <svg
            className="h-5 w-auto fill-current text-app-light-gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5Q783-687 811.5-622T840-482q0 75-28.5 141t-78 115Q684-177 618-148.5T477-120Zm128-197L451-469v-214h60v189l137 134-43 43Z" />
          </svg>
          <p className="text-app-light-gray text-sm">History</p>
        </div>
      </div>
    </div>
  );
}
