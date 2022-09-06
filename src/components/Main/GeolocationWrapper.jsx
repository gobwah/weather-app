import useGeolocation from "react-hook-geolocation";
import Main from "./Main";

const GeolocationWrapper= () => {
    const geolocation =  useGeolocation();
    const haveToWait = !geolocation.error && (!geolocation.latitude || !geolocation.longitude);

    return haveToWait ? 
        <div>{geolocation.error ? `Error: ${geolocation.error}` : 'Waiting for location'}</div>
        :
        <Main lat={geolocation.latitude} long={geolocation.longitude} />
}

export default GeolocationWrapper;