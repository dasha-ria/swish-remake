export function Requesting() {
  return (
    <div className="relative w-[250px] h-[500px] bg-swish-bg">
      <svg
        className="absolute top-12 left-6 h-8 w-auto fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>

      <div className="absolute w-full top-28 flex flex-col items-center justify-center">
        <p className="text-white text-2xl font-bold">200 kr</p>
        <svg
          className="h-7 w-auto fill-current text-app-light-gray mt-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z" />
        </svg>

        <div className="flex gap-3 items-center mt-6">
          <div className="h-9 w-9 bg-[#578EF7] rounded-full flex justify-center items-center">
            <p className="text-white font-bold">EA</p>
          </div>
          <div>
            <p className="text-white font-bold text-[12px]">
              Erik Johan Andersson
            </p>
            <p className="text-app-light-gray text-[11px]">+46 720 4012 345</p>
          </div>
        </div>

        <form className="flex flex-col justify-center items-center gap-4 mt-12">
          <div className="flex flex-col bg-app-md-gray rounded-lg w-[12.5rem] h-28 placeholder-app-light-gray">
            <textarea
              className="bg-transparent p-2 flex-1 z-50 resize-none outline-none text-white"
              placeholder="Write a message.."
            ></textarea>
            <div className="mb-2 ml-2">
              <div className="flex justify-center items-center bg-[#2D2F39] w-7 h-7 rounded-md">
                <svg
                  className="h-4 w-auto fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M479.5-267q72.5 0 121.5-49t49-121.5q0-72.5-49-121T479.5-607q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5ZM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120H140Zm0-60h680v-513H645l-73-87H388l-73 87H140v513Zm340-257Z" />
                </svg>
              </div>
            </div>
          </div>
          <button className="bg-swish-blue py-2 rounded-lg w-[12.5rem] text-white font-bold">
            Request
          </button>
        </form>
      </div>
    </div>
  );
}
