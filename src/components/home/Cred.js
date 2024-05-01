import "./cred.css";

const Cred = ({ header, image, subheading, description }) => {
  return (
    <div className="resume-item">
      <div className="bg"></div>
      <div className="cred">
        <h1>{header}</h1>
        <h2>{subheading}</h2>
        <div className="content">
        <p>{description}</p>
          {image != null && <img src={image} alt={header} />}
        </div>
      </div>
    </div>
  );
};

export default Cred;
