import Navbar from "../components/shared/Navbar";
import OptionsBar from "../components/OptionsBar";
import { useParams } from "react-router-dom";
import RideCard from "../components/RideCard";

export default function Home() {
  const { rides } = useParams();
  console.log(rides);
  return (
    <div className="w-screen h-screen bg-app-black">
      <Navbar />
      <OptionsBar rides={rides} />
      <div className="w-full px-4">
        <RideCard
          details={{
            id: 729,
            origin_station_code: 11,
            station_path: [51, 68, 75, 87],
            destination_station_code: 95,
            date: "02/23/2022 01:27 PM",
            map_url: "https://picsum.photos/200",
            state: "Bihar",
            city: "Supaul",
          }}
        />
      </div>
    </div>
  );
}
