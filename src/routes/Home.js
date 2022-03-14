import Navbar from "../components/shared/Navbar";
import OptionsBar from "../components/OptionsBar";
import { useParams } from "react-router-dom";
import RideCard from "../components/RideCard";
import { useState, useEffect, useMemo } from "react";
import { populateDistances, sortDistances,removeDuplicateRides } from "../utils/helpers";

export default function Home() {
  const { rides } = useParams();
  const [rideDetails, setRideDetails] = useState([]);
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
 
  const arr = useMemo(()=> removeDuplicateRides(filterRideDetails),[filterRideDetails])

  return (
    <div className="w-screen h-screen bg-app-black overflow-auto">
      <Navbar />
      <OptionsBar rides={rides} />
      <div className="w-full px-4 overflow-auto">
        {arr.map((details) => {
          return <RideCard details={details} />;
        })}
      </div>
    </div>
  );
}
