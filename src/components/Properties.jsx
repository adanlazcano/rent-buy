import React from "react";
import car from "../img/car.svg";
import shower from "../img/shower.svg";
import grid from "../img/grid.svg";
import garage from "../img/garage.svg";

const Properties = (item) => {
  return (
    <div className="card">
      <img className="cardImg" src={item.src} alt={item.name} />

      <div className="mainDetails">
        <span>{item.name}</span>
        <span style={{ color: "#FFAC12", paddingLeft: "110px" }}>
          {item.type}
        </span>

        <div className="mainDetailsDesc">
          <ul>
            <li>
              {" "}
              <img src={car} alt="bedrooms" /> {item.bedrooms}
            </li>
            <li>
              {" "}
              <img src={shower} alt="bathroom" /> {item.bathroom}
            </li>
            <li>
              {" "}
              <img src={grid} alt="grid" /> {item.mts}
            </li>
            <li>
              {" "}
              <img src={garage} alt="garage" /> {item.slot}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Properties;
