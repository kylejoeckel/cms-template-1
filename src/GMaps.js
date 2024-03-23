import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";
import { RestaurantInfo } from "./content/RestaurantInfo";

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCWJ6Xj4OVvTmKuUrOM3AbPX-KEO0J-Y5Y",
    id: "a552e243fbe9d8ae",
  });
  const center = useMemo(() => ({ lat: RestaurantInfo.lat, lng: RestaurantInfo.long }), []);

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
          options={{ mapId: "a552e243fbe9d8ae" }}
        ></GoogleMap>
      )}
    </div>
  );
};

export default GoogleMaps;
