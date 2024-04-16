import "./botButton.css"

/*Buttons at the bottom of the home page */
const BottomButton = ({ image, clickLink }) => {
  return (
    <div className="botButton">
      <a href={clickLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="social media icon" />
      </a>
    </div>
  );
};

export default BottomButton;
