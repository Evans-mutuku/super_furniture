import Header from './Components/Header';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-green-100 h-fit">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route/>
        <Route/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
