import Navbar from "../components/shared/Navbar";
import OptionsBar from "../components/OptionsBar";
import { useParams } from "react-router-dom";
import RideCard from "../components/RideCard";
import { useState, useEffect, useMemo } from "react";
import {
  populateDistances,
  sortDistances,
  removeDuplicateRides,
} from "../utils/helpers";

export default function Home() {
  const { rides } = useParams();
  const [rideDetails, setRideDetails] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectCity, setSelectedCity] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://assessment.api.vweb.app/rides");
      const formattedResponse = await response.json();
      let updatedRides = populateDistances(formattedResponse, 40);
      updatedRides = sortDistances(updatedRides);
      setRideDetails(updatedRides);
    };
    getData();
  }, []);

  

  const filterRideDetails = useMemo(() => {
    const filteredList = rideDetails.filter((ride) => {
      let rideDate = new Date(ride.date);
      let currDate = Date.now();

      return (
        rides === "nearest" ||
        (rides === "upcoming" && rideDate > currDate) ||
        (rides === "past" && rideDate < currDate)
      );
    });
    return filteredList;
  }, [rideDetails, rides]);

  const arr = useMemo(
    () => removeDuplicateRides(filterRideDetails),
    [filterRideDetails]
  );

  const filteredArray = useMemo(() => {
      const ar = arr.filter((item)=>{
        return (
          item.state.includes(selectedState) && item.city.includes(selectCity)
        )
      })
      return ar;
  },[arr, selectedState, selectCity])

  return (
    <div className="w-screen h-screen bg-app-black overflow-auto">
      <Navbar />
      <OptionsBar
        rides={rides}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectCity={selectCity}
        setSelectedCity={setSelectedCity}
      />
      <div className="w-full px-4 overflow-auto">
        {filteredArray.map((details) => {
          return <RideCard details={details} />;
        })}
      </div>
    </div>
  );
}
