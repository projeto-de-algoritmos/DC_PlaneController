import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";

    const initializeMap = ({ setMap, mapContainer }) => {
      setMap(
        new mapboxgl.Map({
          container: mapContainer.current,
          style:
            "mapbox://styles/leosilvagomes/cksp5d5ae3qah17o1va6d4yon/draft", // stylesheet location
          center: [0, 35],
          zoom: 1,
          interactive: false,
        })
      );
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} className="MapWrap" />;
};

export default Map;
