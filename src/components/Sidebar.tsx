import {
  WiDayWindy,
  WiDayLightning,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";
import { FaChartSimple } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";

const icons = [
  { Component: WiDayLightning },
  { Component: GiWorld },
  { Component: FaChartSimple },
  { Component: WiThermometer },
  { Component: WiBarometer },
];

export default function Sidebar() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 -translate-x-48 fixed transition-transform duration-1000 z-50 flex h-screen bg-[#1E293B]">
        <div className="absolute top-2 -right-6 p-3 rounded-full text-white border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 hover:rotate-45 transition-transform duration-500">
          <WiDayWindy size={30} />
        </div>
        <div className="mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
          {icons.map(({ Component }, index) => (
            <div
              key={index}
              className="hover:ml-4 justify-end pr-2 text-white hover:text-purple-500 dark:hover:text-blue-500 p-3 rounded-full transform ease-in-out duration-300 flex"
            >
              <Component size={30} />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
