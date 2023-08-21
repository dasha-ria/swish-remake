export function ChoosePerson({ setPerson, setCurrentPage }: any) {
  const people = [
    { name: "Erik Johan Andersson", initials: "EA", color: "#578EF7" },
    { name: "Johanna Sjöberg", initials: "JS", color: "#F2BF3A" },
    { name: "Emma Nilsson", initials: "EN", color: "#00C6BF" },
    { name: "Felix Blomqvist", initials: "FB", color: "#D19EA3" },
    { name: "Ellen Forsberg", initials: "EF", color: "#578EF7" },
  ];

  return (
    <div className="relative w-[250px] h-[500px] bg-swish-bg">
      <div className="absolute ml-4 bottom-12">
        <p className="text-white text-lg font-medium pb-2">Recent</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-[64px] h-[64px] rounded-lg bg-[#14151A] border border-dashed border-[#2E2E38] flex flex-col p-2 items-center justify-center">
            <svg
              className="h-[20px] w-auto fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M520-120v-80h80v80h-80Zm-80-80v-200h80v200h-80Zm320-120v-160h80v160h-80Zm-80-160v-80h80v80h-80Zm-480 80v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM170-650h140v-140H170v140Zm-50 50v-240h240v240H120Zm50 430h140v-140H170v140Zm-50 50v-240h240v240H120Zm530-530h140v-140H650v140Zm-50 50v-240h240v240H600Zm80 480v-120h-80v-80h160v120h80v80H680ZM520-400v-80h160v80H520Zm-160 0v-80h-80v-80h240v80h-80v80h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Z" />
            </svg>
            <p className="text-white text-[8px] text-center pt-2">Scan QR</p>
          </div>
          {people.map(({ name, initials, color }) => (
            <button
              onClick={() => {
                setPerson({ name, initials, color, number: "+46123211" });
                setCurrentPage("Sending");
              }}
              key={name}
              className="z-50 w-[64px] h-[64px] rounded-lg bg-app-md-gray flex flex-col p-2 items-center justify-center"
            >
              <div
                style={{ backgroundColor: color }}
                className={`w-5 h-5 rounded-full flex justify-center items-center`}
              >
                <p className="text-white font-bold text-[8px]">{initials}</p>
              </div>
              <p className="text-white text-[8px] font-bold text-center pt-1">
                {name}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-10 flex gap-3 items-center">
          <div className="w-[165px] rounded-md py-2 bg-app-dark-gray">
            <p className="pl-2 text-app-light-gray text-[9px]">
              Enter name or number...
            </p>
          </div>
          <p className="text-[10px] text-swish-blue">Cancel</p>
        </div>
      </div>
    </div>
  );
}
