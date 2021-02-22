import { useSelector } from "react-redux";
import "./searchBar.css";
function SearchBar() {
  const tabState = useSelector((state) => state.searchTab);
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <input type="time" className="search-input"></input>
            </div>
            <button className="searchButton" type="submit">
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
              <input type="time" className="search-input"></input>
            </div>
            <button className="searchButton" type="submit">
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
              <input type="time" className="search-input"></input>
            </div>
            <button className="searchButton" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default SearchBar;
