import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../../styles/App.css";
import { RestaurantInfo } from "../../content/RestaurantInfo";

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    id: process.env.REACT_APP_GOOGLE_MAPS_ID,
  });
  const center = useMemo(
    () => ({ lat: RestaurantInfo.lat, lng: RestaurantInfo.long }),
    []
  );

  return loadError ? (
    <></>
  ) : (
    <div style={{ width: "100%", height: "500px" }}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={20}
          options={{ mapId: process.env.REACT_APP_GOOGLE_MAPS_ID }}
        ></GoogleMap>
      )}
    </div>
  );
};

export default GoogleMaps;
