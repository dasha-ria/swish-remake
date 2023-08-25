"use client";

import { Init } from "@/components/init";
import { ChoosePerson } from "@/components/choose";
import { Sending } from "@/components/sending";
import { Sent } from "@/components/sent";
import { Requesting } from "@/components/requesting";
import { Requested } from "@/components/requested";
import { useEffect, useRef, useState } from "react";

export function App() {
  const [currentPage, setCurrentPage] = useState("Init");
  const [amount, setAmount] = useState("");
  const [person, setPerson] = useState<any>();
  const [message, setMessage] = useState("");
  const [paymentMode, setPaymentMode] = useState("Send");

  const btn0Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const btnSendingRef = useRef<HTMLButtonElement>(null);

  const reset = () => {
    setAmount("");
    setPerson(null);
    setMessage("");
    setCurrentPage("Init");
  };

  useEffect(() => {
    let i = 0;
    const states = ["Init", "ChoosePerson", "Sending", "Sent"];

    const id = setInterval(() => {
      if (i === 0) {
        reset();

        setTimeout(() => {
          btn2Ref.current?.focus();
          setTimeout(() => {
            setAmount("2");
          }, 50);
          setTimeout(() => {
            btn2Ref.current?.blur();
          }, 100);
        }, 1000);

        setTimeout(() => {
          btn0Ref.current?.focus();
          setTimeout(() => {
            setAmount("20");
          }, 50);
          setTimeout(() => {
            btn0Ref.current?.blur();
          }, 100);
        }, 1300);

        setTimeout(() => {
          btn0Ref.current?.focus();
          setTimeout(() => {
            setAmount("200");
          }, 50);
          setTimeout(() => {
            btn0Ref.current?.blur();
          }, 100);
        }, 1500);

        setTimeout(() => {
          btnNextRef.current?.focus();
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
          btnSendingRef.current?.focus();
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

    return () => {
      clearInterval(id);
    };
  }, []);

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
        setMessage={setMessage}
        setCurrentPage={setCurrentPage}
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
