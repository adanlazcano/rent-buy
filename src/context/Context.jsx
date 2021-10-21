import axios from "axios";
import { createContext, useState, useEffect } from "react";

const Context = createContext();

document.addEventListener("click", (_) => {
  const filter = document.querySelector(".mainThingsInputTypeContainer");

  filter && filter.classList.remove("active");

  const chkBx = document.querySelectorAll(".chkBx");

  chkBx &&
    chkBx.forEach((item) => {
      item.checked = false;
    });
});

const ContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [loading,setLoading] = useState('Loading...')

  useEffect(
    (_) => {
      const getProperties = async (_) => {
        try {
          let buyProp = await axios.get(
            "https://api.mocklets.com/p68140/buy/properties"
          );

          let rentProp = await axios.get(
            "https://api.mocklets.com/p68140/rent/properties"
          );

          buyProp = buyProp.data;
          rentProp = rentProp.data;

          const arrProperties = [
            ...buyProp.map((item) => ({ ...item, type: "Buy" })),
            ...rentProp.map((item) => ({ ...item, type: "Rent" })),
          ];

          const columns = arrProperties[0] && Object.keys(arrProperties[0]);

          const results = arrProperties.filter((item) =>
            columns.some(
              (column) =>
                item[column]
                  .toString()
                  .toLowerCase()
                  .indexOf(search.toLowerCase()) > -1
            )
          ).sort(_=>Math.random() - 0.5);

          setProperties(results);
          setLoading('No results found');
        } catch (error) {
          console.log(error);
        }
      };

      getProperties();
    },
    [search]
  );

  const data = {loading, properties, setProperties, search, setSearch };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export { ContextProvider };

export default Context;
