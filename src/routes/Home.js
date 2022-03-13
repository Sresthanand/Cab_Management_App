import Navbar from "../components/shared/Navbar";
import OptionsBar from "../components/OptionsBar";
import { useParams } from "react-router-dom";

export default function Home() {
    const {rides} = useParams();
   console.log(rides);
  return (
    <div className="w-screen h-screen bg-app-black">
      <Navbar />
      <OptionsBar rides={rides} />
    </div>
  );
}
