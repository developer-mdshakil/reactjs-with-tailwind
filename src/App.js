import './App.css';
import Assingment from './compontents/Assingment/Assingment';
import NavBar from './compontents/NavBar/NavBar';
import Pricing from './compontents/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <Assingment></Assingment>
    </div>
  );
}

export default App;
