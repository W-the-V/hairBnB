import "./TravelSection.css";
import barber from "../../images/barbershop.png";
import salon from "../../images/donation.png";
import donate from "../../images/salon.png";

function TravelSection() {
  return (
    <>
      <div className="titleBox">
        <h2 className="travelTitle">Travel</h2>
      </div>
      <div className="travelShell">
        <div className="travelBlock">
          <div className="travelImageShell">
            <div className="travelImage">
              <img className="TravelImg" src={barber} />
            </div>
            <div className="travelImage">
              <img className="TravelImg" src={salon} />
            </div>
            <div className="travelImage">
              <img className="TravelImg" src={donate} />
            </div>
            <div className="travelImage">IMAGE HERE</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TravelSection;
