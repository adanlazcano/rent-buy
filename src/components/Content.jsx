import React, { useContext } from "react";
import Context from "../context/Context";
import Properties from "./Properties";
import DefaultProperty from "./DefaultProperty";
import arrows from "../img/arrows.svg";
import MenuFilter from "./MenuFilter";

const Content = () => {
  const {loading, properties, search, setSearch } = useContext(Context);

  const handleMenu = (e) => {
    e.stopPropagation();

    document
      .querySelector(".mainThingsInputTypeContainer")
      .classList.toggle("active");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  return (
    <main className="main">
      {properties
        .map((item) => <DefaultProperty key={item.name} {...item} />)
        .slice(0, 1)}

      <div className="mainSeparator"></div>

      <div className="mainThings">
        <h1>Similar Listings</h1>
        <div className="mainThingsInputContainer">
          <i className="bx bx-search"></i>
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search List..."
          />
        </div>

        <div onClick={handleMenu} className="mainThingsInputTypeContainer">
          <img src={arrows} alt="arrows" />
          <span>Type</span>
          <MenuFilter />
        </div>
      </div>

      <div className="mainCardsContainer">
        {properties.length > 0 ?properties.map((item) => (
          <Properties key={item.name} {...item} />
        )):<h4>{loading}</h4>}
      </div>
    </main>
  );
};

export default Content;
