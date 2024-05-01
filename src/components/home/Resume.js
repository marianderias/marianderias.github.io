import "./resume.css";
import Cred from "./Cred";
import mongoDB from "../resources/mongodb.png";
import usyd from "../resources/usyd.png";

const Resume = () => {
  return (
    <div className="resume">
      <Cred header="MongoDB"
        subheading="Interning from December 2023- February 2024, Software Developer from August 2024 till now"
        image={mongoDB}
        description="I'm proud to say that I'm currently a software developer at MongoDB, working on the relational migrator team.
        After interning on the team to implement migrations from timescale databases to MongoDB timescale databases, I was invited back and I've been there ever since!"
      />

      <Cred header="University of Sydney"
        subheading="Graduated in 2024 with Distinction- Bachelor of Science with Majors in Computer Science and Software Development" image={usyd}
        description={<p>While some may say that Software Development and Computer Science are identical majors, I would say that they're absolutely right!
          But does that mean that I learned twice as much computer science as everyone else? I like to think so! <br></br> <br></br>
          At USYD I held several leadership positions at the Sydney Computing Society, including as a tech events subcomittee member,
          tech events coordinator, and diversity representative.
        </p>} />
    </div>
  );
};

export default Resume;
