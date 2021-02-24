import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../store/pagestate";
import "./searchBar.css";
import { activateSearch } from "../../store/Modals";
function SearchBar() {
  const dispatch = useDispatch();
  const tabState = useSelector((state) => state.searchTab);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(activateSearch());
  };
  return (
    <>
      {tabState.barber && (
        <div className="search-bar">
          <div className="searchTitleBox">
            <h1 className="searchTitle">Barbershop search</h1>
          </div>
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="search-div">
              <label className="search-label">Location</label>
              <input type="search" className="search-input"></input>
            </div>
            <div className="search-div">
              <label className="search-label">Date</label>
              <input type="date" className="search-input"></input>
            </div>
            <div className="search-div">
              <label className="search-label">Time</label>
              <input type="time" className="search-input timeInput"></input>
            </div>
            <button className="searchIcon" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}
      {tabState.salon && (
        <div className="search-bar">
          <div className="searchTitleBox">
            <h1 className="searchTitle">Salon search</h1>
          </div>
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="search-div">
              <label className="search-label">Location</label>
              <input type="search" className="search-input"></input>
            </div>
            <div className="search-div">
              <label className="search-label">Date</label>
              <input type="date" className="search-input"></input>
            </div>
            <div className="search-div">
              <label className="search-label">Time</label>
              <input type="time" className="search-input timeInput"></input>
            </div>
            <button className="searchIcon" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}
      {tabState.donation && (
        <div className="search-bar">
          <div className="searchTitleBox">
            <h1 className="searchTitle">Hair donation search</h1>
          </div>
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="search-div">
              <label className="search-label">Location</label>
              <input type="search" className="search-input"></input>
            </div>
            <div className="search-div">
              <label className="search-label">Date</label>
              <input type="date" className="search-input"></input>
            </div>
            <div className="search-div">
              <label className="search-label">Time</label>
              <input type="time" className="search-input timeInput"></input>
            </div>
            <button className="searchIcon" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default SearchBar;
