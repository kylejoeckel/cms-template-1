import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../../styles/App.css";
import { RestaurantInfo } from "../../content/RestaurantInfo";
import { useSnackbar } from "../../hooks/useSnackbar";

const GOOGLE_MAPS_API_KEY = "AIzaSyCWJ6Xj4OVvTmKuUrOM3AbPX-KEO0J-Y5Y";
const GOOGLE_MAP_ID = "a552e243fbe9d8ae";

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    id: GOOGLE_MAP_ID,
  });
  const { enqueueSnackbar, renderSnackbar } = useSnackbar();
  const center = useMemo(
    () => ({ lat: RestaurantInfo.lat, lng: RestaurantInfo.long }),
    []
  );

  if (loadError) {
    enqueueSnackbar(
      "Failed to load Google Maps. Please try again later.",
      "error"
    );
  }

  return (
    <>
      <div style={{ width: "100%", height: "500px" }}>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            loading="async"
            mapContainerClassName="map-container"
            center={center}
            zoom={20}
            options={{ mapId: GOOGLE_MAP_ID }}
          ></GoogleMap>
        )}
      </div>
      {renderSnackbar()}
    </>
  );
};

export default GoogleMaps;
