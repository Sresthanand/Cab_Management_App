import filterIcon from "../assets/filterIcon.svg";
import { Link } from "react-router-dom";
import { cities } from "../utils/appConstants";
import { useState } from "react";

export default function OptionsBar({
  rides,
  selectedState,
  setSelectedState,
  selectCity,
  setSelectedCity,
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="h-1/10 w-full text-white flex justify-between px-4 relative">
      <div className="flex w-1/4 justify-between text-app-grey items-center">
        <Link to="/nearest">
          <div className={rides === "nearest" ? "text-white underline" : ""}>
            Nearest rides
          </div>
        </Link>
        <Link to="/upcoming">
          <div className={rides === "upcoming" ? "text-white underline" : ""}>
            Upcoming rides
          </div>
        </Link>
        <Link to="/past">
          <div className={rides === "past" ? "text-white underline" : ""}>
            Past rides
          </div>
        </Link>
      </div>
      <div
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        className="flex items-center "
      >
        <span className="m-2">
          <img src={filterIcon} />
        </span>
        <span>Filters</span>
        {showFilters && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" bg-black absolute bottom-0 right-0 transform -translate-x-5 translate-y-full p-3 rounded-lg text-black w-1/6"
          >
            <div className="text-app-grey">Filters</div>
            <hr className="text-app-grey my-3" />
            <div className="my-3">
              <select
                defaultValue={""}
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity("")
                }}
                className="bg-app-black text-white w-full"
              >
                <option value="" disabled>
                  State
                </option>

                {Object.keys(cities).map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <select
                defaultValue={""}
                value={selectCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                }}
                className="bg-app-black text-white w-full"
              >
                <option value="" disabled>
                  City
                </option>

                {cities[selectedState] &&
                  cities[selectedState].map((item) => {
                    return (
                      <option value={item.city} key={item}>
                        {item.city}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
