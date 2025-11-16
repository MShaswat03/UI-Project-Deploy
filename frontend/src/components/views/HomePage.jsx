import RightSideBar from "../bars/RightSideBar";
import Dashboard from "../sections/Dashboard";
import Recommended from "../sections/Recommended";

import "./Homepage.css";


export default function HomePage({joinedClubs, registeredEvents, savedInternships}) {


  return (  
    <div className="grid-container">
      <Dashboard joinedClubs={joinedClubs} registeredEvents={registeredEvents} savedInternships={savedInternships}/>
    </div>
  );
}
