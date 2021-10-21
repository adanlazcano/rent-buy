const Button = (props) => {
  const styleBtn = {
    color: props.color,
    background: props.bg,
    width: props.width,
    height: props.height,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: props.lh,
    borderRadius: "0px 18px 0px 0px",
  };

  const styleArrow = {
    color: props.arrow,
  };

  return (
    <a className="btnWork" style={styleBtn} href="foo">
      {props.title} <strong style={styleArrow}>&#8594;</strong>{" "}
    </a>
  );
};

export default Button;
