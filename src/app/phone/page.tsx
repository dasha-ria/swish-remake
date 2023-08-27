//Code referenced from https://codepen.io/aburkalo/pen/qBoyaGE and translated into Tailwind CSS
import { Phone } from "@/components/phone";
import { App } from "@/components/app";

export default function PhonePage() {
  return (
    <div className="w-screen h-screen bg-app-md-gray flex justify-center items-center">
      <Phone className="scale-125">
        <App></App>
      </Phone>
    </div>
  );
}
