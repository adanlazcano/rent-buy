import Button from "./Button";
import Columns from "./Columns";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTitle">
        <h1>
          Make your dreams a <span>reality</span>
        </h1>
        <Button
          title="Work with us"
          width="211px"
          height="50px"
          arrow="#FFF"
          bg="#FFAC12"
          color="#000"
          lh="50px"
        />
      </div>
      <div className="footerDown">
        <div className="footerContentSm">
          <Logo />
          <div className="footerSm">
            <a href="foo">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="foo">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="foo">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footerColumnContent">
          <Columns />
          <Columns />
          <Columns />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
