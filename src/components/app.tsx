"use client";

import { Init } from "@/components/init";
import { ChoosePerson } from "@/components/choose";
import { Sending } from "@/components/sending";
import { Sent } from "@/components/sent";
import { Requesting } from "@/components/requesting";
import { Requested } from "@/components/requested";
import { useEffect, useRef, useState } from "react";

type AppProps = {
  animationFlow?: "sending" | "requesting";
};

function setIntervalImmediately(func: Function, interval: number) {
  func();
  return setInterval(func, interval);
}

export function App({ animationFlow }: AppProps) {
  const [currentPage, setCurrentPage] = useState("Init");
  const [amount, setAmount] = useState("");
  const [person, setPerson] = useState<any>();
  const [message, setMessage] = useState("");
  const [paymentMode, setPaymentMode] = useState<"Send" | "Request">("Send");

  const btn0Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const btn3Ref = useRef<HTMLButtonElement>(null);
  const btn5Ref = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const btnSendingRef = useRef<HTMLButtonElement>(null);
  const btnRequestingRef = useRef<HTMLButtonElement>(null);

  const reset = () => {
    setAmount("");
    setPerson(null);
    setMessage("");
    setCurrentPage("Init");
    setPaymentMode("Send");
  };

  useEffect(() => {
    let intervalId: any = null;
    if (animationFlow === "sending") {
      let i = 0;
      const states = ["Init", "ChoosePerson", "Sending", "Sent"];

      intervalId = setIntervalImmediately(() => {
        if (i === 0) {
          reset();

          setTimeout(() => {
            btn2Ref.current?.setAttribute("tabIndex", "-1");
            btn2Ref.current?.focus();
            btn2Ref.current?.setAttribute(
              "tabIndex",
              btn2Ref.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              setAmount("2");
            }, 50);
            setTimeout(() => {
              btn2Ref.current?.blur();
            }, 100);
          }, 1000);

          setTimeout(() => {
            btn0Ref.current?.setAttribute("tabIndex", "-1");
            btn0Ref.current?.focus();
            btn0Ref.current?.setAttribute(
              "tabIndex",
              btn0Ref.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              setAmount("20");
            }, 50);
            setTimeout(() => {
              btn0Ref.current?.blur();
            }, 100);
          }, 1300);

          setTimeout(() => {
            btn0Ref.current?.setAttribute("tabIndex", "-1");
            btn0Ref.current?.focus();
            btn0Ref.current?.setAttribute(
              "tabIndex",
              btn0Ref.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              setAmount("200");
            }, 50);
            setTimeout(() => {
              btn0Ref.current?.blur();
            }, 100);
          }, 1500);

          setTimeout(() => {
            btnNextRef.current?.setAttribute("tabIndex", "-1");
            btnNextRef.current?.focus();
            btnNextRef.current?.setAttribute(
              "tabIndex",
              btnNextRef.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              btnNextRef.current?.blur();
            }, 200);
          }, 3700);
        }

        if (i === 1) {
          setTimeout(() => {
            setPerson({
              name: "Erik Johan Andersson",
              initials: "EA",
              color: "#578EF7",
              number: "+46 720 123 123",
            });
          }, 3700);
        }

        if (i === 2) {
          const msg = "Congratulations!";

          setTimeout(() => {
            btnSendingRef.current?.setAttribute("tabIndex", "-1");
            btnSendingRef.current?.focus();
            btnSendingRef.current?.setAttribute(
              "tabIndex",
              btnSendingRef.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              btnSendingRef.current?.blur();
            }, 200);
          }, 3700);

          for (let i = 0; i < msg.length; i++) {
            setTimeout(() => {
              setMessage(msg.slice(0, i + 1));
            }, i * 100 + 1000);
          }
        }

        setCurrentPage(states[i]);

        i++;

        if (i >= states.length) {
          i = 0;
        }
      }, 4000);
    }

    if (animationFlow === "requesting") {
      let i = 0;
      const states = ["Init", "ChoosePerson", "Requesting", "Requested"];

      intervalId = setIntervalImmediately(() => {
        if (i === 0) {
          reset();

          setTimeout(() => {
            setPaymentMode("Request");
          }, 500);

          setTimeout(() => {
            btn3Ref.current?.setAttribute("tabIndex", "-1");
            btn3Ref.current?.focus();
            btn3Ref.current?.setAttribute(
              "tabIndex",
              btn3Ref.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              setAmount("3");
            }, 50);
            setTimeout(() => {
              btn3Ref.current?.blur();
            }, 100);
          }, 1000);

          setTimeout(() => {
            btn5Ref.current?.setAttribute("tabIndex", "-1");
            btn5Ref.current?.focus();
            btn5Ref.current?.setAttribute(
              "tabIndex",
              btn5Ref.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              setAmount("35");
            }, 50);
            setTimeout(() => {
              btn5Ref.current?.blur();
            }, 100);
          }, 1300);

          setTimeout(() => {
            btn0Ref.current?.setAttribute("tabIndex", "-1");
            btn0Ref.current?.focus();
            btn0Ref.current?.setAttribute(
              "tabIndex",
              btn0Ref.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              setAmount("350");
            }, 50);
            setTimeout(() => {
              btn0Ref.current?.blur();
            }, 100);
          }, 1500);

          setTimeout(() => {
            btnNextRef.current?.setAttribute("tabIndex", "-1");
            btnNextRef.current?.focus();
            btnNextRef.current?.setAttribute(
              "tabIndex",
              btnNextRef.current?.tabIndex.toString() || "0"
            );
            setTimeout(() => {
              btnNextRef.current?.blur();
            }, 200);
          }, 3700);
        }

        if (i === 1) {
          setTimeout(() => {
            setPerson({
              name: "Johanna Sjöberg",
              initials: "JS",
              color: "#F2BF3A",
              number: "+46 720 234 234",
            });
          }, 3700);
        }

        if (i === 2) {
          const msg = "Restaurant bill";

          setTimeout(() => {
            btnRequestingRef.current?.setAttribute("tabIndex", "-1");
            btnRequestingRef.current?.focus();
            btnRequestingRef.current?.setAttribute(
              "tabIndex",
              btnRequestingRef.current?.tabIndex.toString() || "0"
            );

            setTimeout(() => {
              btnRequestingRef.current?.blur();
            }, 200);
          }, 3700);

          for (let i = 0; i < msg.length; i++) {
            setTimeout(() => {
              setMessage(msg.slice(0, i + 1));
            }, i * 100 + 1000);
          }
        }

        setCurrentPage(states[i]);

        i++;

        if (i >= states.length) {
          i = 0;
        }
      }, 4000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [animationFlow]);

  if (currentPage === "Init") {
    return (
      <Init
        amount={amount}
        setAmount={setAmount}
        setCurrentPage={setCurrentPage}
        paymentMode={paymentMode}
        setPaymentMode={setPaymentMode}
        btn0Ref={btn0Ref}
        btn2Ref={btn2Ref}
        btn3Ref={btn3Ref}
        btn5Ref={btn5Ref}
        btnNextRef={btnNextRef}
      ></Init>
    );
  } else if (currentPage === "ChoosePerson") {
    return (
      <ChoosePerson
        person={person}
        setPerson={setPerson}
        setCurrentPage={setCurrentPage}
        paymentMode={paymentMode}
      ></ChoosePerson>
    );
  } else if (currentPage === "Sending") {
    return (
      <Sending
        amount={amount}
        person={person}
        message={message}
        setMessage={setMessage}
        setCurrentPage={setCurrentPage}
        btnSendingRef={btnSendingRef}
      ></Sending>
    );
  } else if (currentPage === "Sent") {
    return (
      <Sent
        person={person}
        amount={amount}
        message={message}
        reset={reset}
      ></Sent>
    );
  } else if (currentPage === "Requesting") {
    return (
      <Requesting
        amount={amount}
        person={person}
        message={message}
        setMessage={setMessage}
        setCurrentPage={setCurrentPage}
        btnRequestingRef={btnRequestingRef}
      ></Requesting>
    );
  } else if (currentPage === "Requested") {
    return (
      <Requested
        person={person}
        amount={amount}
        message={message}
        reset={reset}
      ></Requested>
    );
  }
}
