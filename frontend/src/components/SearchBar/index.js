import { useSelector, useDispatch } from "react-redux";
import "./searchBar.css";
import { activateSearch } from "../../store/Modals";
import SearchModal from "../SearchModal";
import {
  searchBarbers,
  searchSalons,
  searchDonations,
} from "../../store/spots";
function SearchBar() {
  const searchState = useSelector((state) => state.modal.search);
  const dispatch = useDispatch();
  const tabState = useSelector((state) => state.searchTab);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabState.barber) {
      dispatch(searchBarbers);
    }
    if (tabState.salon) dispatch(searchSalons);
    if (tabState.donation) dispatch(searchDonations);
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
              <i className="fas fa-search"></i>
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
              <i className="fas fa-search"></i>
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
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}
      {searchState && <SearchModal />}
    </>
  );
}
export default SearchBar;
