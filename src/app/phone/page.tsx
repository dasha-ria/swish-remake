//Code referenced from https://codepen.io/aburkalo/pen/qBoyaGE and translated into Tailwind CSS
import { Phone } from "@/components/phone";
import { App } from "@/components/app";

export default function PhonePage() {
  return (
    <Phone>
      <App animationFlow="requesting"></App>
    </Phone>
  );
}
