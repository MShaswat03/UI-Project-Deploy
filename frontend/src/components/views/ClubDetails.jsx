import { useParams } from "react-router-dom";
import clubs from "../../assets/ClubData.json";
import Image from "../cards/Image";
import Button from "../buttons/ApplyButton";
import JoinButton from "../buttons/JoinButton";

export default function ClubDetails({ joinedClubs, setJoinedClubs }) {
  const { id } = useParams();
  const club = clubs.find((club) => club.id == id);
  const isJoined = joinedClubs.some((club) => club.id == id);

  const handleJoinToggle = async () => {
    if (isJoined) {
      // remove from joined list
      setJoinedClubs(joinedClubs.filter((c) => c.id !== id));
      const leaveClub = async () => {
        await fetch(`http://localhost:8000/myclubs/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      };
      leaveClub();
    } else {
      // add to joined list
      setJoinedClubs([...joinedClubs, club]);
      const joinClub = async () => {
        await fetch("http://localhost:8000/myclubs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(club),
        });
      };
      joinClub();
    }
  };
  return (
    <div className="details-container">
      <div className="header">
        <Image imgSrc={club.imgSrc} category={club.category} />
        <p>{club.tag}</p>
        <span>{club.organisation}</span>
        <h1>{club.title}</h1>
        <div className="footer"></div>
        <div className="details">
          <div className="about">
            <h2>About this Opportunity</h2>
            {club.description}
          </div>
        </div>
        <div className="info-wrapper">
          <span className="material-symbols-outlined">calendar_today</span>
          <span>{club.date}</span>
          <span className="material-symbols-outlined">
            nest_clock_farsight_analog
          </span>
          <span>{club.time}</span>
          <span className="material-symbols-outlined">location_on</span>
          <span>{club.location}</span>
          <span className="material-symbols-outlined">group</span>
          <span>{club.spots} spots</span>
          <span className="material-symbols-outlined">local_atm</span>
          <span>Salary {club.salary}</span>
        </div>
        <JoinButton
          text={isJoined ? "Joined" : "Join"}
          icon={isJoined ? "check_circle" : null}
          onClick={handleJoinToggle}
        />
      </div>
    </div>
  );
}
