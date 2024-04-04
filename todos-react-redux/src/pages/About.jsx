import { useParams } from "react-router-dom";

function About() {
  const params = useParams();

  return (
    <div className="About">
      About {params.name}
    </div>
  );
}

export default About;
