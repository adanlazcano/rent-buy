import Button from "./Button";

const Form = () => {
  return (
    <div className="mainForm">
      <div className="mainFormProfile">
        <img
          src="https://res.cloudinary.com/explority/image/upload/v1576684946/sug1_ihcv91.jpg"
          alt=""
        />
        <div className="mainFormProfileDesc">
          <span>Kayley Hall</span>
          <small>View profile</small>
        </div>
      </div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Phone" />
      <input type="email" placeholder="Email" />
      <textarea
        defaultValue="Hello, I am interested in..."
        className="inputDesc"
      ></textarea>
      <Button
        width="100%"
        height="70px"
        title="Learn more"
        arrow="#FFAC12"
        bg="#000"
        color="#FFF"
        lh="70px"
      />
    </div>
  );
};

export default Form;
