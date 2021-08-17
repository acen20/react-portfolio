import "./App.css";
import "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Navbar from "./Navbar";
import SectionHeading from "./SectionHeading";
import Projects from "./Projects";
import Loader from "./Loader";

function App() {
  return (
    <div>
      <Loader />
      <Navbar />
      <Header />
      <SectionHeading title="Featured Projects" />
      <Projects />
    </div>
  );
}

export default App;
