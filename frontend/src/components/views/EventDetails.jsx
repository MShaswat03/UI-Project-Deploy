import { useParams } from "react-router-dom";
import events from "../../assets/EventData.json";
import Image from "../cards/Image";
import RegisterButton from "../buttons/RegisterButton";
import { useState } from "react";

export default function EventDetails({ registeredEvents, setRegisteredEvents }) {
  const { id } = useParams();
  const event = events.find((event) => event.id == id);
  const isRegistered = registeredEvents.some((event) => event.id == id);


  const handleRegisterToggle = async () => {
    if (isRegistered) {
      alert("you have already applied");
    }
  };

  return (
    <div className="details-container">
      <div className="header">
        <Image imgSrc={event.imgSrc} category={event.category} />
        <p>{event.tag}</p>
        <span>{event.organisation}</span>
        <h1>{event.title}</h1>
        <div className="footer"></div>
        <div className="details">
          <div className="about">
            <h2>About this Opportunity</h2>
            {event.description}
          </div>
        </div>
      </div>
      <RegisterButton
        text={isRegistered ? "Registered" : "Register"}
        icon={isRegistered ? "check_circle" : null}
        onClick={handleRegisterToggle}
        event={event}
        setRegisteredEvents={setRegisteredEvents}
      />
    </div>
  );
}
