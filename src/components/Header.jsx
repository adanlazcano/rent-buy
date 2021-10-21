import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="headerElements">
        <Logo />

        <ul>
          <li>
            <a href="foo">NavLink</a>
          </li>
          <li>
            <a href="foo">NavLink</a>
          </li>
          <li>
            <a href="foo">NavLink</a>
          </li>
          <li>
            <a href="foo">NavLink</a>
          </li>
        </ul>

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
    </header>
  );
};

export default Header;
