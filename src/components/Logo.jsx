import img from "../img/img.svg";
import logo from "../img/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={img} alt="logo" />
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
