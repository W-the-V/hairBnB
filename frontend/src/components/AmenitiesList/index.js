import "./AmenitiesList.css";
function AmenitiesList() {
  return (
    <>
      <h2 className="amenitiesTitle">Amenities</h2>
      <div className="amenitiesShell">
        <div className="amenitiesBlock">
          <div className="amenityImage">
            <i className="fas fa-comment-dots amenityIco"></i>
            <div className="amenityInfo">Talkative Staff</div>
          </div>
          <div className="amenityImage">
            <i className="fas fa-comment-slash amenityIco"></i>
            <div className="amenityInfo">Non-talkative Staff</div>
          </div>
          <div className="amenityImage">
            <i className="fas fa-sink amenityIco"></i>
            <div className="amenityInfo">Hair Washing</div>
          </div>
          <div className="amenityImage">
            <i className="fas fa-tint amenityIco"></i>
            <div className="amenityInfo">Complimentary Drinks</div>
          </div>
        </div>
        <div className="amenitiesBlock">
          <div className="amenityImage">
            <i className="fas fa-walking amenityIco"></i>
            <div className="amenityInfo">Walk-ins Welcome</div>
          </div>
          <div className="amenityImage">
            <i className="fas fa-calendar-check amenityIco"></i>
            <div className="amenityInfo">Appointment Only</div>
          </div>
          <div className="amenityImage">
            <i className="fas fa-volume-up amenityIco"></i>
            <div className="amenityInfo">Music</div>
          </div>
          <div className="amenityImage">
            <i className="fas fa-volume-mute amenityIco"></i>
            <div className="amenityInfo">No Music</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AmenitiesList;
