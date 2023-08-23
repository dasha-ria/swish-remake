"use client";

import { Init } from "@/components/init";
import { ChoosePerson } from "@/components/choose";
import { Sending } from "@/components/sending";
import { Sent } from "@/components/sent";
import { Requesting } from "@/components/requesting";
import { Requested } from "@/components/requested";
import { useState } from "react";

export function App() {
  const [currentPage, setCurrentPage] = useState("Init");
  const [amount, setAmount] = useState("");
  const [person, setPerson] = useState<any>({
    name: "Robin",
    number: "+46 1231231",
    initials: "AR",
    color: "#ff0000",
  });
  const [message, setMessage] = useState("");
  const [paymentMode, setPaymentMode] = useState("Send");

  const reset = () => {
    setAmount("");
    setPerson(null);
    setMessage("");
    setCurrentPage("Init");
  };

  if (currentPage === "Init") {
    return (
      <Init
        amount={amount}
        setAmount={setAmount}
        setCurrentPage={setCurrentPage}
        paymentMode={paymentMode}
        setPaymentMode={setPaymentMode}
      ></Init>
    );
  } else if (currentPage === "ChoosePerson") {
    return (
      <ChoosePerson
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
        setMessage={setMessage}
        setCurrentPage={setCurrentPage}
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
