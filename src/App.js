import Header from './Components/Header';
import { Routes, Route} from "react-router-dom";
import ImageSlider from './Components/Slider/ImageSlider';
import { SlideData } from './Components/Slider/SlideData';
import Home from './Components/Home';

function App() {
  return (
    <div className="bg-green-100">
      <Header/>
      <ImageSlider  slides={SlideData} />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route/>
        <Route/>
      </Routes>
      
    </div>
  );
}

export default App;
