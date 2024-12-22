import React, {useState} from "react";
import Maptypes from "./Maptype";

function Curloc(){

    const [latitude,setLatitue] = useState(0);
    const [longitude, setLongitude] = useState(0);
    // const [position, setPosition] = useState({latitude:0,longitude:0});

    function getLocation(){
    if(navigator.geolocation){
        console.log("Navigator work");
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("Latitude: "+position.coords.latitude);
            console.log("Longitude: "+position.coords.longitude);
            setLatitue(position.coords.latitude);
            setLongitude(position.coords.longitude);
        },
    (error)=>{
        console.log("Error message: "+error.message);
    })

    }else{
        console.log("Navigator not work.");
    }

}

    return (
        <>
        <div className="flex items-center gap-4 p-3 ">
            <button className="bg-green-900 p-2 rounded-2xl border-2" onClick={getLocation}>Get Location</button>
            <p className="">this is current location component.</p>
            <p>Latitude is {latitude}</p>
            <p>Longitude is {longitude}</p>
            <Maptypes/>
        </div>
        </>
    );
}

export default Curloc