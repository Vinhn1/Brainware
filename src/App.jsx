import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        {/* Header */}
        <Header/>
        {/* Hero  */}
        {/* Benefits  */}
        {/* Collaboration  */}
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
