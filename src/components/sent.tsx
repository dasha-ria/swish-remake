import Image from "next/image";

export function Sent({ person, amount, message, reset }: any) {
  return (
    <div className="relative w-[250px] h-[500px] bg-swish-bg">
      <button onClick={reset} className="z-50 absolute top-12 left-6 ">
        <svg
          className="h-8 w-auto fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
      </button>

      <div className="absolute w-full top-24 flex flex-col items-center justify-center">
        <p className="text-white text-sm">Your payment was sent!</p>
        <p className="text-white text-2xl font-bold mt-12">{amount} kr</p>
        <svg
          className="h-7 w-auto fill-current text-app-light-gray mt-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z" />
        </svg>

        <div className="flex gap-3 items-center mt-6">
          <div
            style={{ backgroundColor: person.color }}
            className="h-9 w-9 rounded-full flex justify-center items-center"
          >
            <p className="text-white font-bold">{person.initials}</p>
          </div>
          <div>
            <p className="text-white font-bold text-[12px]">{person.name}</p>
            <p className="text-app-light-gray text-[11px]">{person.number}</p>
          </div>
        </div>

        {message && (
          <div className="chat-bubble relative mt-6 py-2 px-3 bg-swish-blue rounded-2xl max-w-[12.5rem]">
            <p className="text-white text-xs max-w-[12.5rem] break-words">
              {message}
            </p>
          </div>
        )}

        <div className="flex gap-1 mt-3">
          <p className="text-app-light-gray text-[10px]">12.08.2023</p>
          <p className="text-app-light-gray text-[10px]">·</p>
          <p className="text-app-light-gray text-[10px]">20:50</p>
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <Image
          className="w-16 h-auto pt-8"
          src="/swish-logo.png"
          alt="Swish logo"
          width="1734"
          height="528"
        ></Image>
      </div>
    </div>
  );
}
