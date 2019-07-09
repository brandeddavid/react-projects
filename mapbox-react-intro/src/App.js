import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'

function App() {
  const [ viewport, setViewport] = useState({
    latitude: -1.28333,
    longitude: 36.81667,
    width: '100vw',
    height: '100vh',
    zoom: 10,

  })
  return (
    <div className="App">
      <ReactMapGL
        { ...viewport }
        mapboxApiAccessToken = { process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange = { viewport => setViewport(viewport) }
      >

      </ReactMapGL>
    </div>
  );
}

export default App;
