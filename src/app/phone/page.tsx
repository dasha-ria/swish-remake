//Code referenced from https://codepen.io/aburkalo/pen/qBoyaGE and translated into Tailwind CSS
import { Phone } from "@/components/phone";
import { Init } from "@/components/init";
import { ChoosePerson } from "@/components/choose";
import { Sending } from "@/components/sending";

export default function PhonePage() {
  return (
    <Phone>
      {/* <Init></Init> */}
      {/* <ChoosePerson></ChoosePerson> */}
      <Sending></Sending>
    </Phone>
  );
}
