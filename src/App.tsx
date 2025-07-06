import Navbar from "./components/navbar";
import Contact from "./sections/contact";
import Education from "./sections/education";
import Expertise from "./sections/expertize";
import Main from "./sections/main";

const App = () => {
  return (
    <div className="hacker-background min-h-screen text-white relative overflow-hidden">
      <div className="glitch-effect"></div>
        <Navbar />
        <Main/>
        <Expertise/>
        <Education/>
        <Contact/>
    </div>
  );
};

export default App;