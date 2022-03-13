
import ppic from "../../assets/ppic.jpg"

export default function Navbar() {
  return (
    <div className="h-1/10 w-full bg-black flex justify-between items-center px-4">
      <div className="text-white text-2xl font-bold">
          Edvora
      </div>
      <div className="flex">
         <span className="text-white font-semibold">
             Sresth Anand
         </span>
         
         <img className="w-7 ml-3 rounded-full" src={ppic}/>
      </div>
    </div>
  );
}
