import NavbarMobile from "./Components/NavbarMobile.jsx";
import NavbarTablet from "./Components/NavbarTablet.jsx";
import NavbarDesktop from "./Components/NavbarDesktop.jsx";
import Card from "./Components/Card.jsx";
import "./Sass/base.css";
function App() {
  return (
    <div>
      <NavbarMobile />
      {/* <NavbarTablet /> */}
      {/* <NavbarDesktop /> */}
      <Card />
      
    </div>
  );
}

export default App;
