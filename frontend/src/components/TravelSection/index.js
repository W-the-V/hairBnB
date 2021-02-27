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
              <img
                className="TravelImg"
                src={barber}
                alt="barbershop by fauzan akbar, ID"
              />
              <div className="travelDesc">Popular Barbershops</div>
            </div>
            <div className="travelImage">
              <img
                className="TravelImg"
                src={salon}
                alt="Hair Salon by iconixar"
              />
              <div className="travelDesc">Popular Salons</div>
            </div>
            <div className="travelImage">
              <img
                className="TravelImg dark"
                src={donate}
                alt="Donation by The Icon Z at Noun Project"
              />
              <div className="travelDesc">Top Charities</div>
            </div>
            <div className="travelImage">
              <img
                className="TravelImg dark"
                src={travel}
                alt="Travel by Hai Studio, ID"
              />
              <div className="travelDesc">Vacation Haircut</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TravelSection;
