import Navbar from "../components/shared/Navbar";
import OptionsBar from "../components/OptionsBar";
import { useParams } from "react-router-dom";
import RideCard from "../components/RideCard";
import { useState, useEffect } from "react";

export default function Home() {
  const { rides } = useParams();
  const [rideDetails, setRideDetails] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://assessment.api.vweb.app/rides");
      const formattedResponse = await response.json();
      setRideDetails(formattedResponse);
    };
    getData();
  }, []);

  return (
    <div className="w-screen h-screen bg-app-black overflow-auto">
      <Navbar />
      <OptionsBar rides={rides} />
      <div className="w-full px-4 overflow-auto">
      {rideDetails.map((details)=>{
         return(
           <RideCard details={details}/>
         )
      })}
      </div>
    </div>
  );
}
