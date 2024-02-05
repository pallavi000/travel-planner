import React from "react";
import LogoImg from "../assets/images/logo.png";
import BxIcon from "../assets/images/bx_trip.png";
import ProfileIcon from "../assets/images/mdi_account.png";
import HeadsetIcon from "../assets/images/ic_baseline-headset-mic.png";

function Nabvar() {
  return (
    <div className="z-10 absolute w-full px-16 py-1 ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center  gap-2">
          <img src={LogoImg} />
          <div className="text-white text-3xl font-bold">HillTop</div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 text-xl font-medium text-white">
            <img src={BxIcon} />
            <div>My Trip</div>
          </div>
          <div className="flex items-center gap-2 text-xl font-medium text-white">
            <img src={HeadsetIcon} />
            <div>Customer Care</div>
          </div>
          <div className="flex items-center gap-2 text-xl font-medium text-white">
            <img src={ProfileIcon} />
            <div>Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nabvar;
