import NavBar from "../components/NavBar";
import HomeMsgAndToConnect from "../components/HomeMsgAndToConnect";

import "../styles/homepage.css";

function Homepage() {
  return (
    <div className="background">
      <NavBar />
      <HomeMsgAndToConnect />
    </div>
  );
}

export default Homepage;
