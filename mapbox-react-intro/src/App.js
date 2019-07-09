import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'

function App() {
  const [ viewport, setViewport] = useState({
    longitude: -75.69812,
    latitude: 45.41117,
    width: '100vw',
    height: '100vh',
    zoom: 10,

  })
  return (
    <div className="App">
      <ReactMapGL
        { ...viewport }
        mapboxApiAccessToken = { process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle = "mapbox://styles/brandeddavid/cjxvlwfoj1cpd1cni2mcu8qcw"
        onViewportChange = { viewport => setViewport(viewport) }
      >

      </ReactMapGL>
    </div>
  );
}

export default App;
