import React from "react";
import LogoImg from "../assets/images/logo.png";

function Footer() {
  return (
    <div className="bg-black p-16 flex justify-between items-center text-white">
      <div>
        <div className="flex items-center  gap-2">
          <img src={LogoImg} />
          <div className="text-white text-3xl font-bold text-white">
            HillTop
          </div>
        </div>
        <div className="text-white mt-8 w-[50%]">
          Royal Caribbean Group, formerly known as Royal Caribbean Cruises Ltd.,
          is a global cruise holding company incorporated in Liberia and based
          in Miami, Florida, US. It is the world's second-largest cruise line
          operator, after Carnival Corporation & plc.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Subscribe</div>
        <div className="text-sm">
          Subscribe for your monthly blog letter to stay informed about travel
          and tours.
        </div>
        <div className="flex items-center bg-white  rounded-full mt-4">
          <input
            className="outline-0 border-0 bg-white text-gray-600 p-4 px-8 rounded-full"
            placeholder="Email Address"
          />
          <div className="bg-[#ECA00D] text-black rounded-full p-4 px-8 font-bold">
            SEND
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
