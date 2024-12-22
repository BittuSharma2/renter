import { useState } from 'react'
import Map from './component/Map';
import Curloc from './component/Curloc';
import GMap from './component/GMap';

function App() {
  

  return (
    <>
      <div className='bg-stone-700 h-screen w-full'>
      <Curloc/>
      {/* <h1>this is leaflet learning project.</h1> */}
      {/* <Map/> */}
      <br />
      <GMap/>
      </div>
    </>
  )
}

export default App
