import "./TravelSection.css";
import barber from "../../images/barbershop.png";
import donate from "../../images/donation.png";
import salon from "../../images/salon.png";
import travel from "../../images/travel.png";

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
              <div className="travelDesc">Popular Barbershops</div>
            </div>
            <div className="travelImage">
              <img className="TravelImg" src={salon} />
              <div className="travelDesc">Popular Salons</div>
            </div>
            <div className="travelImage">
              <img className="TravelImg dark" src={donate} />
              <div className="travelDesc">Top charities</div>
            </div>
            <div className="travelImage">
              <img className="TravelImg dark" src={travel} />
              <div className="travelDesc">Get a haircut while on Vacation</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TravelSection;
