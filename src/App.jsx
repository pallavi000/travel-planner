import { useState } from "react";
import { Icon } from "@iconify/react";
import VerifyIcon from "./assets/images/verify.png";
import GradIcon from "./assets/images/graduation.png";
import FlightIcon from "./assets/images/flight.png";
import Tour1Img from "./assets/images/tour1.png";
import Tour2Img from "./assets/images/tour2.png";
import Tour3Img from "./assets/images/tour3.png";
import VdoImg from "./assets/images/vdo.png";
import Rec1Img from "./assets/images/rec1.png";
import Rec2Img from "./assets/images/rec2.png";
import Rec3Img from "./assets/images/rec3.png";
import Rec4Img from "./assets/images/rec4.png";
import Rec5Img from "./assets/images/rec5.png";
import Dest1Img from "./assets/images/dest1.png";
import Dest2Img from "./assets/images/dest2.png";
import Dest3Img from "./assets/images/dest3.png";
import Dest4Img from "./assets/images/dest4.png";
import Dest5Img from "./assets/images/dest5.png";
import Dest6Img from "./assets/images/dest6.png";
import Dest7Img from "./assets/images/dest7.png";
import Dest8Img from "./assets/images/dest8.png";
import Dest9Img from "./assets/images/dest9.png";
import Dest10Img from "./assets/images/dest10.png";
import DestinationsImg from "./assets/images/dests.png";
import TravelImg from "./assets/images/trvellers 1.png";
import CompasImg from "./assets/images/compass 1.png";

const destns = [
  Dest1Img,
  Dest2Img,
  Dest3Img,
  Dest4Img,
  Dest5Img,
  Dest6Img,
  Dest6Img,
  Dest7Img,
  Dest8Img,
  Dest9Img,
  Dest10Img,
];

const tours = [Tour1Img, Tour2Img, Tour3Img];
const recoms = [Rec1Img, Rec2Img, Rec3Img, Rec4Img, Rec5Img, Rec1Img];

function App() {
  return (
    <div>
      <div className="relative">
        <div className=" first-bg  px-16 py-16 h-full w-full text-white flex justify-center">
          <div className="flex flex-col  justify-center items-center my-8">
            <div className="text-[120px] font-bold leading-[145px] mt-16">
              Peace of mind
            </div>
            <div className="font-bold text-4xl mb-16">Find your destiny</div>
            <div className="bg-[#FFFFFF66] p-8 rounded-lg flex items-center gap-8 w-full mb-16 ">
              <div className="flex-col flex-gap-2">
                <div className="font-bold text-lg">Check-in</div>
                <div className="flex items-center justify-between gap-8 text-black font-bold text-lg p-3 bg-white">
                  <div className="text-sm">08/03/2022</div>
                  <Icon icon="uil:calender" />
                </div>
              </div>
              <div className="flex-col flex-gap-2">
                <div className="font-bold text-lg">Check-out</div>
                <div className="flex items-center gap-8 justify-between text-black font-bold text-lg p-3 bg-white">
                  <div className="text-sm">08/04/2022</div>
                  <Icon icon="uil:calender" />
                </div>
              </div>
              <div className="flex-col flex-gap-2">
                <div className="font-bold text-lg">Rooms</div>
                <div className="flex items-center justify-between gap-8 text-black font-bold text-lg p-3 bg-white">
                  <div className="text-sm ">1</div>
                  <Icon icon="bxs:down-arrow" className="bg-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex-col flex-gap-2">
                <div className="font-bold text-lg">Adults</div>
                <div className="flex items-center gap-8 justify-between text-black font-bold text-lg p-3 bg-white">
                  <div className="text-sm ">1</div>
                  <Icon icon="bxs:down-arrow" className="bg-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex-col flex-gap-2">
                <div className="font-bold text-lg">Children</div>
                <div className="flex items-center gap-8 justify-between text-black font-bold text-lg p-3 bg-white">
                  <div className="text-sm ">1</div>
                  <div className="bg-[#C4C4C4] h-full w-full">
                    <Icon
                      icon="bxs:down-arrow"
                      className="bg-[#C4C4C4] h-full w-full"
                    />
                  </div>
                </div>
              </div>
              <button className="text-black bg-orange-400 px-6 py-3 font-bold rounded-sm mt-4">
                Find Rooms
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center font-bold text-xl bg-[#E5E5E5] absolute bottom-0 opacity-8  w-full px-16 py-4">
          <div className="flex items-center gap-3">
            <img src={FlightIcon} />
            <div>+ Things to do</div>
          </div>
          <div className="flex items-center gap-3">
            <img src={VerifyIcon} />
            <div>+ Tour Operators</div>
          </div>
          <div className="flex items-center gap-3">
            <img src={GradIcon} />
            <div>+ Certified agents</div>
          </div>
        </div>
      </div>

      <div className="p-16 mt-8">
        <div className="flex justify-center  items-center">
          <div className="font-bold  text-3xl  text-center my-8 pb-3 mb-16 border-b-2 border-orange-500">
            Today's Top Deal
          </div>
        </div>

        <div className="flex items-center gap-8">
          {tours.map((tour, index) => {
            return (
              <div
                className="flex flex-col gap-4 border-gray-200 shadow-lg"
                key={index}
              >
                <img src={tour} />
                <div className="font-bold text-lg px-4">
                  Royal caribbean transatlantic cruise
                </div>
                <div className="text-lg px-4 pb-4">
                  Royal Caribbean Group, formerly known as Royal Caribbean
                  Cruises Ltd., is a global cruise holding company incorporated
                  in Liberia and based in Miami, Florida, US. It is the world's
                  second-largest cruise line operator, after Carnival
                  Corporation & plc.
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" second-bg mt-16  px-16 py-24 h-full w-full text-white grid grid-cols-2 items-end justify-end  gap-8">
        <div className="col-span-1 flex flex-col gap-32">
          <div className="text-3xl font-bold text-white pb-2 border-b-2 border-gray-300">
            Why Booking With Us
          </div>
          <div>
            <img src={VdoImg} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#FFFFFF66]   flex flex-col  gap-8 w-full p-8 ">
            <div className="text-[#FFE600] font-bold text-3xl">Take a tour</div>
            <div>
              Best In Class Service, Huge Inventories, Multiple Deals & Global
              Expertise! Cheaper smarter and simpler business trips. No Annual
              Maintenance Fee. Easy modifications. 14000+ Active companies. Best
              Price on Hotels. No Hidden Charges. Free Upgrades. Real-time
              reporting. Our features and benefits are curated to suit the needs
              of every employee using myBiz. Based on our experience, we can
              outrightly say that the response of myBiz team is worth
              appreciation. The team has been stupendously putting their best
              foot forward to resolve any query raised, even at odd hours, to
              maintain customer delight. This approach sets them apart. mybiz
              helped us in providing the best of travel and accommodation
              related services.
            </div>
          </div>
        </div>
      </div>

      <div className="p-16">
        <div className="flex justify-center  items-center pb-16">
          <div className="font-bold  text-3xl mb-8 text-center my-8 pb-3 border-b-2 border-orange-500">
            Recommended for you
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-8 flex-wrap">
          {recoms.map((tour, index) => {
            return (
              <div
                className="col-span-1 flex flex-col gap-4 border-gray-200 shadow-lg"
                key={index}
              >
                <img src={tour} />
                <div className="font-bold text-lg px-4">
                  Royal caribbean transatlantic cruise
                </div>
                <div className="text-lg px-4 pb-4">
                  Royal Caribbean Group, formerly known as Royal Caribbean
                  Cruises Ltd., is a global cruise holding company incorporated
                  in Liberia and based in Miami, Florida, US. It is the world's
                  second-largest cruise line operator, after Carnival
                  Corporation & plc.
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-16">
        <div className="flex justify-center  items-center pb-16">
          <div className="font-bold  text-3xl mb-8 text-center my-8 pb-3 border-b-2 border-orange-500">
            Top Destinations
          </div>
        </div>
        <div className="flex fex-wrap">
          <img src={DestinationsImg} />
        </div>
      </div>

      <div className="p-16">
        <div className="flex justify-center  items-center pb-16">
          <div className="font-bold  text-3xl mb-8 text-center my-8 pb-3 border-b-2 border-orange-500">
            Our client experiences
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 justify-center items-center">
          <div className="col-span-1 grid grid-cols-3 items-center border border-gray-200">
            <div className="col-span-1">
              <img src={TravelImg} className=" object-contain" />
            </div>
            <div className="flex flex-col gap-2 text-lg p-8 shadow-md col-span-2">
              <div>
                If you’re twenty-two, physically fit, hungry to learn and be
                better, I urge you to travel – as far and as widely as possible.
                Sleep on floors if you have to.
              </div>
              <div className="font-bold "> Anthony Bourdain </div>
            </div>
          </div>
          <div className="col-span-1">
            <img src={CompasImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
