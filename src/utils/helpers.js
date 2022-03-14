export const populateDistances = (rides, userStation) => {
  let updatedRides = rides.map((ride) => {
    let stationPath = ride.station_path;
    let minDistance = 999999999;
    for (let i of stationPath) {
      minDistance = Math.min(Math.abs(i - userStation), minDistance);
    }
    ride.distance = minDistance;
    return ride;
  });
  return updatedRides;
};

export const sortDistances = (rides) => {
  rides.sort(function (a, b) {
    return a.distance - b.distance;
  });
  return rides;
};

export const removeDuplicateRides = (rides) => {
  for (let i = 0; i < rides.length; i++) {
    for (let j = i + 1; j < rides.length; j++) {
      if (rides[j] == rides[i]) {
        rides = rides.slice(0, j).concat(rides.slice(j + 1, rides.length));
      }
    }
  }
  return rides;
};
