import { useContext } from "react";
import Context from "../context/Context";

const MenuFilter = () => {
  const { setSearch } = useContext(Context);

  const showMenu = (e) => {
    e.stopPropagation();
  };

  const handleCheck = (e) => {
    document.querySelectorAll(".chkBx").forEach((item) => {
      item.checked = false;
    });

    e.target.checked = true;

    setSearch(e.target.value);
  };

  return (
    <div onClick={showMenu} className="menuFilter">
      <label className="menuFilterContainer">
        <input
          type="radio"
          onChange={handleCheck}
          className="chkBx"
          value="Rent"
          name="Rent"
        />{" "}
        <small>Rent</small>
      </label>
      <label className="menuFilterContainer">
        <input
          type="radio"
          onChange={handleCheck}
          value="Buy"
          className="chkBx"
          name="Buy"
        />{" "}
        <small>Buy</small>
      </label>
      <label className="menuFilterContainer">
        <input
          type="radio"
          onChange={handleCheck}
          value=""
          className="chkBx"
          name="All"
        />{" "}
        <small>All</small>
      </label>
    </div>
  );
};

export default MenuFilter;
