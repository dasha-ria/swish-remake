//Code referenced from https://codepen.io/aburkalo/pen/qBoyaGE and translated into Tailwind CSS
import { Phone } from "@/components/phone";
import { Init } from "@/components/init";
import { ChoosePerson } from "@/components/choose";
import { Sending } from "@/components/sending";
import { Sent } from "@/components/sent";
import { Requesting } from "@/components/requesting";
import { Requested } from "@/components/requested";

export default function PhonePage() {
  return (
    <Phone>
      {/* <Init></Init> */}
      {/* <ChoosePerson></ChoosePerson> */}
      {/* <Sending></Sending> */}
      {/* <Sent></Sent> */}
      {/* <Requesting></Requesting> */}
      <Requested></Requested>
    </Phone>
  );
}
