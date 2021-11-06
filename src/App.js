import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom"
import Slider from './components/Slider'
import data from './data/data.json'
import Offers from './components/Offers'
import Heading from './components/Heading'
import StarProduct from './components/StarProduct'

function App() {
  return (
    <Router>
       <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starproduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
    </Router>
  );
}

export default App;
