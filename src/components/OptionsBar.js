import filterIcon from "../assets/filterIcon.svg";
import { Link } from "react-router-dom";

export default function OptionsBar({rides}) {
  return (
    <div className="h-1/10 w-full text-white flex justify-between px-4">
      <div className="flex w-1/4 justify-between text-app-grey items-center">

      <Link to="/nearest"><div className={rides==="nearest"?"text-white underline":""}>Nearest rides</div></Link>
      <Link to="/upcoming"><div className={rides==="upcoming"?"text-white underline":""}>Upcoming rides</div></Link>
      <Link to="/past"><div className={rides==="past"?"text-white underline":""}>Past rides</div></Link>
      </div>
      <div className="flex items-center">
        <span className="m-2">
          <img src={filterIcon} />
        </span>
        <span>Filters</span>
      </div>
    </div>
  );
}
