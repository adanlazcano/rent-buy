import car from "../img/car.svg";
import shower from "../img/shower.svg";
import grid from "../img/grid.svg";
import garage from "../img/garage.svg";
import date from "../img/date.svg";
import Form from "./Form";

const DefaultProperty = (item) => {
  return (
    <>
      <div className="mainTotal">
        <h2>{item.name}</h2>
        <h2>{`$${new Intl.NumberFormat("en-En").format(item.cost)}`}</h2>
      </div>

      <div className="mainContent">
        <div className="mainContainerImg">
          <img className="mainImg" src={item.src} alt="img" />
          <div className="mainDetails">
            <span style={{ fontSize: "20px" }}>Details</span>{" "}
            <span style={{ color: "#FFAC12", marginLeft: "60%" }}>
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
                  <img src={shower} alt="bathrooms" /> {item.bathroom}
                </li>
                <li>
                  {" "}
                  <img src={grid} alt="grid" /> {item.mts}
                </li>
                <li>
                  {" "}
                  <img src={garage} alt="garage" /> {item.slot}
                </li>
                <li>
                  {" "}
                  <img src={date} alt="date" /> {item.year}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default DefaultProperty;
