import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        {/* Header */}
        <Header/>
        {/* Hero  */}
        <Hero/>
        {/* Benefits  */}
        <Benefits/>
        {/* Collaboration  */}
        <Collaboration/>
        {/* Services  */}
        {/* Pricing  */}
        {/* Roadmap  */}
        {/* Footer */}
      </div>
      {/* ButtonGradients: kho màu gradient để xài lại nhiều lần */}
      <ButtonGradient />
    </>
  );
}

export default App;
