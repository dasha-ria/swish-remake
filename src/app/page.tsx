import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-swish-bg min-w-screen min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <Image
          className="w-32 lg:w-40 h-auto pt-8 pl-4 md:pl-12 md:w-40"
          src="/swish-logo.png"
          alt="Swish logo"
          width="1734"
          height="528"
        ></Image>

        <div className="relative z-10">
          <div className="w-full lg:from-transparent lg:to-transparent bg-gradient-to-t from-swish-bg from-35% to-swish-bg/0 flex flex-col justify-end">
            <div className="pl-4 lg:pl-12 lg:mt-12 lg:mb-0 mt-60 mb-20">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-purple  via-swish-blue to-gradient-text-green inline">
                Quick
              </h1>
              <h2 className="text-5xl md:text-7xl text-white font-bold">
                payments
              </h2>
              <p className="text-swish-light-text text-base lg:text-lg pt-8 lg:pt-20 w-80 lg:w-96">
                Millions of Swedes - from friends, families, small and large
                businesses - use Swish for quick and smooth payments.
              </p>
              <button className="mt-6 lg:mt-14 flex items-center bg-swish-blue gap-4 px-6 py-4 rounded-xl">
                <p className="text-white font-bold text-xl">Get started</p>
                <svg
                  className="h-6 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full absolute flex justify-center lg:pl-[30vw] items-center top-0 lg:top-12 -z-10">
            <div className="w-[30rem] h-[30rem] lg:w-[34rem] lg:h-[34rem] rounded-full bg-swish-blue/40 md:bg-swish-blue/30 blur-3xl lg:blur-4xl"></div>

            <Image
              className="w-52 md:w-72 h-auto absolute"
              src="/phone-homepage.png"
              alt="Phone showcasing Swish app"
              width="1656"
              height="3407"
            ></Image>
          </div>
        </div>

        <div className="pl-4 lg:pl-12 lg:pt-40">
          <p className="text-3xl lg:text-4xl font-bold text-white">
            No more cash.
          </p>
          <p className="text-swish-light-text w-72 lg:w-96 lg:text-lg pt-4 lg:pt-3">
            Splitting the bill with your friends? Sending someone a birthday
            gift? Selling something on Blocket? You can do this instantly.
          </p>
        </div>

        <div className="pl-4 pt-12 lg:pl-12">
          <p className="text-3xl font-bold text-white md:text-4xl">
            No more queues in store.
          </p>
          <p className="text-swish-light-text w-72 pt-4 lg:text-lg lg:w-96 lg:pt-3">
            You don’t have the credit card with you? No problem, scan a QR code
            and pay instantly.
          </p>
        </div>

        <div className="pt-24 lg:flex lg:gap-40">
          <div className="lg:pl-32 lg:flex lg:flex-col lg:gap-14">
            <div className="lg:px-8 lg:py-8 lg:flex lg:items-center lg:w-[24rem] lg:h-60 lg:bg-gradient-to-t lg:rounded-xl  lg:from-dark-gray2 lg:to-light-gray2">
              <div>
                <div className="ml-16 lg:ml-0 flex items-center justify-center rounded-md lg:rounded-lg bg-gradient-to-t from-dark-gray to-light-gray w-10 h-10 ">
                  <svg
                    className="h-8 w-auto fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z" />
                  </svg>
                </div>
                <p className="pl-16 lg:pl-0 pt-4 text-3xl font-bold text-white">
                  Quick transfers
                </p>
                <p className="pl-16 lg:pl-0 text-swish-light-text w-72 pt-2">
                  Money in your bank account in just seconds.
                </p>
              </div>
            </div>
            <div className="hidden lg:px-8 lg:py-8 lg:flex lg:items-center lg:w-[24rem] lg:h-64 ">
              <div>
                <div className="ml-16 lg:ml-0 flex items-center justify-center rounded-md lg:rounded-lg bg-gradient-to-t from-dark-gray to-light-gray w-10 h-10 ">
                  <svg
                    className="h-8 w-auto fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M450-201h60v-40h60q12.75 0 21.375-8.625T600-271v-130q0-12.75-8.625-21.375T570-431H420v-70h180v-60h-90v-40h-60v40h-60q-12.75 0-21.375 8.625T360-531v130q0 12.75 8.625 21.375T390-371h150v70H360v60h90v40ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm311-581v-159H220v680h520v-521H531ZM220-820v159-159 680-680Z" />
                  </svg>
                </div>
                <p className="pl-16 lg:pl-0 pt-4 text-3xl font-bold text-white">
                  Request? <br></br> No problem.
                </p>
                <p className="pl-16 lg:pl-0 text-swish-light-text w-60 pt-2">
                  Request money and receive it instantly.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12 lg:pt-0 lg:-mt-4 flex justify-center items-center">
            <Image
              className="w-64 lg:w-72 h-auto"
              src="/phone-homepage.png"
              alt="Phone showcasing Swish app"
              width="1656"
              height="3407"
            ></Image>
          </div>
        </div>
        <div className="pt-20 lg:hidden">
          <div className="ml-16 flex items-center justify-center rounded-md bg-gradient-to-t from-dark-gray to-light-gray w-10 h-10">
            <svg
              className="h-8 w-auto fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M450-201h60v-40h60q12.75 0 21.375-8.625T600-271v-130q0-12.75-8.625-21.375T570-431H420v-70h180v-60h-90v-40h-60v40h-60q-12.75 0-21.375 8.625T360-531v130q0 12.75 8.625 21.375T390-371h150v70H360v60h90v40ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm311-581v-159H220v680h520v-521H531ZM220-820v159-159 680-680Z" />
            </svg>
          </div>
          <p className="pl-16 pt-4 text-3xl font-bold text-white">
            Request? <br></br> No problem.
          </p>
          <p className="pl-16 text-swish-light-text w-72 pt-2">
            Money in your bank account in just seconds.
          </p>
          <div className="pt-12 flex justify-center items-center">
            <Image
              className="w-64 h-auto"
              src="/phone-homepage.png"
              alt="Phone showcasing Swish app"
              width="1656"
              height="3407"
            ></Image>
          </div>
        </div>

        <div className="pt-36 lg:pt-48 flex flex-col justify-center items-center">
          <Image
            className="w-40 lg:w-56 h-auto"
            src="/swish-logo.png"
            alt="Swish logo"
            width="1734"
            height="528"
          ></Image>
          <p className="text-2xl lg:text-4xl text-center font-bold text-white pt-12 lg:pt-16">
            Join 8+ million people<br></br>already using Swish.
          </p>
          <button className="mt-8 lg:mt-12 bg-swish-blue px-12 py-4 rounded-xl">
            <p className="text-white font-bold text-xl lg:text-2xl">
              Download Swish
            </p>
          </button>
        </div>
      </div>
      <div className="-mt-28 relative h-72 w-full bg-gradient-to-t from-swish-blue/30 to-swish-bg/0"></div>
    </div>
  );
}
