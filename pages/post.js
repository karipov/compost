import Image from "next/image";
import pic from "../public/card-top.jpg";

export default function Post() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={pic} />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">Community Garden</div>
        <p className="text-gray-700 text-base">
          Your plant is happy and watered!
        </p>
      </div>
      <div className="px-6 pt-1 pb-2">
        <span className="inline-flex bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          15:23 Jan 29
        </span>
        <span className="inline-flex bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Healthy
        </span>
      </div>
    </div>
  );
}
