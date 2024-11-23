import { WiDayWindy , WiDayLightning } from "react-icons/wi";
import { FaChartSimple } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
export default function Sidebar() {
  return (
    <>
<div className="flex min-h-screen">
<aside className = "w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B] ">
  
   <div  className = "-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
    <WiDayWindy />
   </div>
 
  
   <div className= "mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
       <div className= " hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500  bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
       <WiDayLightning />                                
       </div>
       <div className= "hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
       <GiWorld />              
       </div>
       <div className= "hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
       <FaChartSimple />         
       </div>
   </div>
   
</aside>
</div>

    </>
   
  );
}