import map from "../assets/map.svg";

export default function RideCard({ details }) {
  const {
    id,
    origin_station_code,
    station_path,
    destination_station_code,
    date,
    map_url,
    state,
    city,
    distance,
  } = details;

  return (
    <div className="w-full text-white flex bg-card-black px-4 py-8 rounded-lg my-5">
      <div className="w-1/4">
        <img src={map_url} />
      </div>

      <div className="w-1/4 flex flex-col justify-between">
        <div>
          <span className="text-app-grey">Ride id : </span>
          {id}
        </div>
        <div>
          <span className="text-app-grey">Origin Station : </span>
          {origin_station_code}
        </div>
        <div>
          <span className="text-app-grey">station_path : </span>
          {station_path}
        </div>
        <div>
          <span className="text-app-grey">Date : </span>
          {date}
        </div>
        <div>
          <span className="text-app-grey">Distance : </span>
          {distance}
        </div>
      </div>

      <div className="w-1/2 flex justify-end h-8">
        <span className="mr-3 bg-black rounded-3xl px-7 flex items-center">
          {state}
        </span>

        <span className="mr-3 bg-black rounded-3xl px-7 flex items-center">
          {city}
        </span>
      </div>
    </div>
  );
}
