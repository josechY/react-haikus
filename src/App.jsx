import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Home from "./home/Home";
import Contantarnos from "./contactarnos/Contactarnos"
const App = () => (
  <>
    <Header />
    <Main>
      <Home />
      <Contantarnos/>
    </Main>
    <Footer />
  </>
  );


export default App;
