import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route } from "react-router-dom"
import Slider from './components/Slider'
import data from './data/data.json'
import Offers from './components/Offers'
import Heading from './components/Heading'
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories'

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
      <HotAccessoriesMenu />
      <Route exact path="/music">
         <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route>
       <Route exact path="/smartDevice">
         <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
      </Route>
       <Route exact path="/home">
         <HotAccessories Home={data.hotAccessories.home} HomeCover={data.hotAccessoriesCover.home} />
      </Route>
       <Route exact path="/lifestyle">
         <HotAccessories Lifestyle={data.hotAccessories.lifeStyle} LifestyleCover={data.hotAccessoriesCover.lifeStyle} />
      </Route>
       <Route exact path="/mobileAccessories">
         <HotAccessories MobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
      </Route>
    </Router>
  );
}

export default App;
